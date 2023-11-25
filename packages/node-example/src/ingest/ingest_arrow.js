require('dotenv').config();
const { CommonClient, IngestClient, RecordMapper } = require('@dozerjs/node');
const { IngestArrowRequest } = require('@dozerjs/node/gen/ingest_pb');
const { EventType } = require('@dozerjs/node/gen/types_pb');
const pl = require('nodejs-polars');
const path = require('path');
const { tableFromIPC, RecordBatchFileWriter  } = require('apache-arrow');

function common () {
  const client = new CommonClient({
    authToken: process.env.MASTER_TOKEN,
  });
  const options = [
    { endpoint: 'trips_arrow', eventType: EventType.ALL },
  ];
  
  const fieldsMap = options.reduce((map, option) => {
    map[option.endpoint] = client.getFields(option.endpoint).then((fields) => new RecordMapper(fields));
    return map;
  }, {});
  
  
  const stream = client.onEvent(options);
  
  stream.on('data', (operation) => {
    fieldsMap[operation.getEndpointName()].then((mapper) => {
      console.log(JSON.stringify(mapper.mapRecord(operation.getNew())));
    });
  });
  
  stream.on('error', (error) => {
    console.log(error);
    stream.cancel();
  });
}

function ingest () {
  const client = new IngestClient({
    serverAddress: 'localhost:10005',
  });
  const df = pl.readParquet(path.join(__dirname, '../../data/trips_small.parquet'));
  const ipc = df.writeIPC();
  const table = tableFromIPC(ipc);
  const writer = new RecordBatchFileWriter();
  writer.writeAll(table);
  const request = new IngestArrowRequest();
  request.setSchemaName('trips_arrow');
  request.setRecords(writer.toUint8Array());
  client.ingest_arrow(request);
}

common();
ingest();


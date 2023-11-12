const { CommonClient, IngestClient, RecordMapper } = require('@dozerjs/node');
const { IngestRequest } = require('@dozerjs/node/gen/ingest_pb');
const { EventType, OperationType, Value } = require('@dozerjs/node/gen/types_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

function common () {
  const client = new CommonClient({
    authToken: process.env.MASTER_TOKEN,
  });
  const options = [
    { endpoint: 'stock', eventType: EventType.ALL },
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
  const client = new IngestClient();
  const products = [
    'hats',
    'clothes',
    'pants',
    'socks',
    'shoes',
  ];
  setInterval(() => {
    const request = new IngestRequest();
    request.setSchemaName('produce');
    request.setTyp(OperationType.INSERT);
    const name = products[Math.floor(Math.random() * products.length)];
    const num = Math.ceil(Math.random() * 10);
    const datetime = Timestamp.fromDate(new Date());
    request.addNew(new Value().setStringValue(name));
    request.addNew(new Value().setIntValue(num));
    request.addNew(new Value().setTimestampValue(datetime));
    client.ingest(request);
  }, 2000);
}

common();
ingest();


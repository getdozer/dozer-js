const { CommonClient, RecordMapper } = require('@dozerjs/node');
const { EventType } = require('@dozerjs/node/gen/types_pb');

const client = new CommonClient({
  authToken: process.env.MASTER_TOKEN,
});

const options = [
  { endpoint: 'airports_count', eventType: EventType.ALL },
  { endpoint: 'departures_count', eventType: EventType.ALL },
];

const fieldsMap = options.reduce((map, option) => {
  map[option.endpoint] = client.getFields(option.endpoint).then((fields) => new RecordMapper(fields));
  return map;
}, {});

const stream = client.onEvent(options);

stream.on('data', (operation) => {
  fieldsMap[operation.getEndpointName()].then((mapper) => {
    const data = {};
    data['endpoint'] = operation.getEndpointName();
    data['typ'] = operation.getTyp();
    if (operation.getOld()) {
      data['old'] = mapper.mapRecord(operation.getOld());
    }
    if (operation.getNew()) {
      data['new'] = mapper.mapRecord(operation.getNew());
    }
    console.log(JSON.stringify(data));
  });
});

stream.on('error', (error) => {
  console.log(error);
  stream.cancel();
});

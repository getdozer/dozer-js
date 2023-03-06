You can generate typescript mappings of proto files

```bash
protoc --plugin=./node_modules/ts-proto/protoc-gen-ts_proto --ts_proto_out="./generated" protos/types.proto protos/common.proto protos/health.proto protos/ingest.proto
```

Simple usage of count/query messages
```typescript
import {DozerClient} from "./src/client";
import {RecordMapper} from "./src/helper";

let flightsClient = new DozerClient("flights");
flightsClient.count().then(console.log);
flightsClient.query().then((r) => {
    let mapper = new RecordMapper(r.fields);
    r.records.forEach(v => {
        console.log(mapper.mapRecord(v.record.values));
    })
});

let airportsClient = new DozerClient("airports");
airportsClient.count().then(console.log);
airportsClient.query().then((r) => {
    let mapper = new RecordMapper(r.fields);
    r.records.forEach(v => {
        console.log(mapper.mapRecord(v.record.values));
    })
});
```
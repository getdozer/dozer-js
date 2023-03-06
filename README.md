You can generate typescript mappings of proto files

```bash
protoc --plugin=./node_modules/ts-proto/protoc-gen-ts_proto \
--ts_proto_out="./generated" \
--ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false \
protos/types.proto \
protos/common.proto \
protos/health.proto \
protos/ingest.proto
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
airportsClient.getFields().then(response => {
    let mapper = new RecordMapper(response.fields);
    airportsClient.onEvent().then(async (airports) => {
        for await (const airport of airports) {
            if (airport.old) {
                console.log(mapper.mapRecord(airport.old.values));
            }
            if (airport.new) {
                console.log(mapper.mapRecord(airport.new.values));
            }
        }
    })
});

```
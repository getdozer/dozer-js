Generate typescript files for `nice-grpc` library

```bash
protoc --plugin=./node_modules/ts-proto/protoc-gen-ts_proto \
--ts_proto_out="./generated" \
--ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false \
protos/types.proto \
protos/common.proto \
protos/health.proto \
protos/ingest.proto
```

Generate typescript and javascript files for `grpc-web`

```bash
protoc --plugin=./node_modules/ts-proto/protoc-gen-ts_proto \
--ts_proto_out="./generated" \
--js_out=import_style=commonjs,binary:"./generated" \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:"./generated" \
protos/types.proto \
protos/common.proto \
protos/health.proto \
protos/ingest.proto
```
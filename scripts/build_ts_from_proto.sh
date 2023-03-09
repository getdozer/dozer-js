#!/bin/bash
mkdir src/generated
protoc --plugin=./node_modules/ts-proto/protoc-gen-ts_proto \
--ts_proto_out="./src/generated" \
--ts_proto_opt=esModuleInterop=true \
--js_out=import_style=commonjs,binary:"./src/generated" \
--grpc-web_out=import_style=typescript,mode=grpcweb:"./src/generated" \
protos/*.proto
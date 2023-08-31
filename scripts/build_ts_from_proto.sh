#!/bin/bash
rm -rf src/generated
mkdir -p src/generated/protos

protoc \
--plugin=./node_modules/ts-proto/protoc-gen-ts_proto \
--ts_proto_out="./src/generated/protos" \
--ts_proto_opt=esModuleInterop=true \
--js_out=import_style=commonjs,binary:"./src/generated/protos" \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:"./src/generated/protos" \
--proto_path=protos \
protos/*.proto
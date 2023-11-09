#!/bin/bash
dest=./gen
rm -rf $dest
mkdir -p $dest



grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:$dest \
  --grpc_out=grpc_js:$dest \
  --proto_path=protos \
./protos/*.proto

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=grpc_js:$dest \
  --proto_path=protos \
./protos/*.proto

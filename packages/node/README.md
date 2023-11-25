<div align="center">
    <a target="_blank" href="https://getdozer.io/">
        <br><img src="https://dozer-assets.s3.ap-southeast-1.amazonaws.com/logo-blue.svg" width=40%><br>
    </a>
</div>

<p align="center">
    <br />
    <b>
    Connect any data source, combine them in real-time and instantly get low-latency gRPC and REST APIs.<br>
    ⚡ All with just a simple configuration! ⚡️
    </b>
</p>
<br />

<p align="center">
  <a href="https://github.com/getdozer/dozer/actions/workflows/dozer.yaml" target="_blank"><img src="https://github.com/getdozer/dozer/actions/workflows/dozer.yaml/badge.svg" alt="CI"></a>
  <a href="https://coveralls.io/github/getdozer/dozer?branch=main" target="_blank"><img src="https://coveralls.io/repos/github/getdozer/dozer/badge.svg?branch=main&t=kZMYaV&style=flat" alt="Coverage Status"></a>
  <a href="https://getdozer.io/docs/dozer" target="_blank"><img src="https://img.shields.io/badge/doc-reference-green" alt="Docs"></a>
  <a href="https://discord.com/invite/3eWXBgJaEQ" target="_blank"><img src="https://img.shields.io/badge/join-on%20discord-primary" alt="Join on Discord"></a>
  <a href="https://github.com/getdozer/dozer-python/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-MIT-informational" alt="License"></a>

</p>
<br>


## Overview
This repository is a typescript wrapper over gRPC APIs that are automatically generated when you run [Dozer](https://github.com/getdozer/dozer).


## Installation

```bash
yarn add @dozerjs/node
```


## AuthClient

### `getAuthToken(filter: string): Promise<string>`
Generate a user token with custom access [more detail](https://getdozer.io/docs/accessing-data/authorization)

```typescript
import { AuthClient } from '@dozerjs/node';

const client = new AuthClient({
  authToken: MASTER_TOKEN
});
const token = await client.authToken(JSON.stringify({
  Custom: {
    stock: {
      $filter: {},
    },
  }
}));
```

## CommonClient

### `getEndpoints(): Promise<string[]>`
Get a name list of all endpoints

```typescript
import { CommonClient } from '@dozerjs/node';
const client = new CommonClient();
const endpoints = await client.getEndpoint();
```

### `getFields(endpoint: string): Promise<FieldDefinition.AsObject[]>`
Get fields defination for the endpoint

```typescript
import { CommonClient } from '@dozerjs/node';
const client = new CommonClient();
const fields = await client.getFields('stock')
```

### `count(endpoint: string, query?: DozerQUery): Promise<FieldDefinition.AsObject[]>`
Count query returns number of records in particular source.

```typescript
import { CommonClient } from '@dozerjs/node';
const client = new CommonClient();
const count = await client.getCount('stock');
```

### `query<T>(endpoint: string, query?: DozerQUery): Promise<[FieldDefinition.AsObject[], DozerRecord<T>[]]>`
Query method is used to fetch records from cache [more detail](https://getdozer.io/docs/api/grpc/common)

```typescript
import { CommonClient } from '@dozerjs/node';
const client = new CommonClient();
const [fields, records] = await client.query('stock');
```


### `onEvent(options: DozerOnEventOption[]>`
Create a gRPC stream to monitor real-time store modifications for multiple endpoints.

```typescript
import { CommonClient, RecordMapper } from '@dozerjs/node';
import { EventType, Operation } from '@dozerjs/node/gen/types_pb';
const client = new CommonClient();

const options = [
  endpoint: 'stock',
  eventType: EventType.ALL
];

const fieldsMap = options.reduce((map, option) => {
  map[option.endpoint] = client.getFields(option.endpoint).then((fields) => new RecordMapper(fields));
  return map;
}, {});

const stream = client.onEvent(options);

stream.on('data', (operation: Operation) => {
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
```

## HealthClient

### `healthCheck(): Promise<HealthCheckResponse.ServingStatus>`


```typescript
import { HealthClient } from '@dozerjs/node';

const client = new HealthClient();
const status = await client.healthCheck();
```

### `healthWatch(): grpc.ClientReadableStream<HealthCheckResponse.ServingStatus>`


```typescript
import { HealthClient } from '@dozerjs/node';

const client = new HealthClient();
const stream = client.healthWatch();

stream.on('data', (status: HealthCheckResponse.ServingStatus) => {
  console.log('health', status);
})
```

## IngestClient

### `ingest(): Promise<IngestResponse>`
Ingest dat on Dozer pushing data to a gRPC endpoint in a streaming fashion [more detail](https://getdozer.io/docs/sources/grpc)

```typescript
import { IngestClient } from '@dozerjs/node';
import { OperationType } from '@dozerjs/node/gen/types_pb';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

const client = new IngestClient();
const request = new IngestRequest();

request.setSchemaName('produce');
request.setTyp(OperationType.INSERT);
request.addNew(new Value().setStringValue('hats'));
request.addNew(new Value().setIntValue(Math.ceil(Math.random() * 10)));
request.addNew(new Value().setTimestampValue(Timestamp.fromDate(new Date())));
client.ingest(request);
```

### `ingest_stream(): Promise<IngestResponse>`
Ingest dat on Dozer pushing data to a gRPC endpoint in a streaming fashion [more detail](https://getdozer.io/docs/sources/grpc)

```typescript
import { IngestClient } from '@dozerjs/node';
import { OperationType } from '@dozerjs/node/gen/types_pb';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

const client = new IngestClient();
const stream = client.ingest_stream();

const request = new IngestRequest();

request.setSchemaName('produce');
request.setTyp(OperationType.INSERT);
request.addNew(new Value().setStringValue('hats'));
request.addNew(new Value().setIntValue(Math.ceil(Math.random() * 10)));
request.addNew(new Value().setTimestampValue(Timestamp.fromDate(new Date())));
stream.write(request);

stream.end();
```

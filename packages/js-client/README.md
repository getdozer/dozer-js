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
yarn add @dozerjs/dozer
```

## Instance

```typescript
  const client = new DozerClient();
  const endpoint = client.getEndpoint('flights');
```

## Methods

### `Count()`
Count query returns number of records in particular source.

```typescript
  const count = await endpoint.count();
```


### `Query(query = string | null)`

Query method is used to fetch records from cache. Reference to gRPC method is [here](https://getdozer.io/docs/api/grpc/common)

```typescript
  const [fields, records] = await endpoint.query();
```

Also, client supports query parameter, which allows to filter, sort and paginate. More about you can find [here](https://getdozer.io/docs/api/grpc/common#dozer-common-QueryRequest)
```typescript
import { Order } from "@dozerjs/dozer";

const query = {
    orderBy: {
        start: Order.ASC
    }
}

const [fields, records] = await endpoint.query(query);
```

### `OnEvent(eventType: EventType = EventType.ALL)`
Other available option is to use events streams method `onEvent`.
It connects to the gRPC stream and sends changes to the client. This method has `eventType` parameter, which is used to determine what type of changes will be streamed.
Available options are `ALL`, `INSERT_ONLY`, `UPDATE_ONLY`, `DELETE_ONLY`.

```typescript
import { EventType, DozerEndpointEvent, DozerFilter } from "@dozerjs/dozer";

const filter: DozerFilter | null = null;

endpoints.onEvent((evt: DozerEndpointEvent) => {
  console.log(evt.data);
  console.log(evt.fields);
  console.log(evt.primaryIndexKeys);
  console.log(evt.operation);
  console.log(evt.mapper);
}, EventType.INSERT_ONLY, filter);
```

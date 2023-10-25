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
This repository is a vue helpers for using [Dozer](https://github.com/getdozer/dozer) as data provider.

## Installation

```bash
# npm
npm install @dozerjs/dozer-vue
# yarn
yarn add @dozerjs/dozer-vue
# pnpm
pnpm add @dozerjs/dozer-vue
```

## Usage

### Provider

```vue
<script setup lang="ts">
import { DozerProvider } from "@dozerjs/dozer-vue";
</script>

<template>
  <DozerProvider :value="{
      serverAddress: 'http://localhost:50051',
  }">
    <!-- content -->
  </DozerProvider>
</template>
```

### query
`useDozerQuery(endpoint: string, query?: DozerQuery)`

This hook can be used for getting data from cache. It allows to pass [query](https://getdozer.io/docs/accessing-data/query-format).
Query is json object serialized as string.

```vue
<script setup lang="ts">
import { useDozerQuery } from "@dozerjs/dozer-vue";
const { fields, records } = useDozerQuery('airports');
</script>

<template>
  <div v-for="record of records" :key="record.__dozer_record_id">{{JSON.stringify(record)}}</div>
</template>
```

### count
`useDozerCount(endpoint: string, query?: DozerQuery)`

This hook returns number of records in endpoint.

```vue
<script setup lang="ts">
import { useDozerCount } from "@dozerjs/dozer-vue";
const { count } = useDozerCount('airports');
</script>

<template>
  <span>Total airports count: {count}</span>
</template>
```

###  event
`useDozerEvent(options: DozerOnEventOption[])`

This hook can create a gRPC stream to monitor real-time store modifications for multiple endpoints.

```vue
<script setup lang="ts">
import { types_pb } from '@dozerjs/dozer';
import { useDozerEvent } from "@dozerjs/dozer-vue";
import { ref } from 'vue';

const count = ref(0);

const { stream } = useDozerEvent([
  {
    endpoint: 'airports',
    eventType: types_pb.EventType.All,
  }
]);

stream.on('data', (operation: types_pb.Operation) => {
  count.value += 1;
})
</script>

<template>
  <span>Total event count: {count}</span>
</template>
```


## Advantage

### connect stream

Here a `connect` function exported from `useDozerQuery` and `useDozerCount`, it can monitor gRPC stream exported from `useDozerEvent` and automagically updates.

```vue
<script setup lang="ts">
import { types_pb } from '@dozerjs/dozer';
import { useDozerCount, useDozerEvent, useDozerQuery } from "@dozerjs/dozer-vue";

const { stream } = useDozerEvent([
  {
    endpoint: 'airports',
    eventType: types_pb.EventType.ALL
  },
]);
const { count, connect: countConnect } = useDozerCount('airports');
const { records, connect: queryConnect } = useDozerQuery('airports');
countConnect(stream);
queryConnect(stream);
</script>

<template>
  <h3>Total count: <small>* automagic updates</small></h3>
  <div>{count}</div>
  <h3>Records length:  <small>* automagic updates</small></h3>
  <div v-for="record of records" :key="record.__dozer_record_id">{{JSON.stringify(record)}}</div>
</template>
```

### consume operation

The `connect` function will consume all the operations of gRPC stream, if you want to filter, you can use `consume` funtion.

```vue
<script setup lang="ts">
import { types_pb } from '@dozerjs/dozer';
import { useDozerCount, useDozerEvent, useDozerQuery } from "@dozerjs/dozer-vue";

const { stream } = useDozerEvent([
  {
    endpoint: 'airports',
    eventType: types_pb.EventType.ALL
  },
]);
const { count, consume: countConsume } = useDozerCount('airports');
const { records, consume: queryConsume } = useDozerQuery('airports');
stream.on('data', (operation: types_pb.Operation) => {
  countConsume(operation);
  queryConsume(operation);
});
</script>

<template>
  <h3>Total count: <small>* automagic updates</small></h3>
  <div>{count}</div>
  <h3>Records length:  <small>* automagic updates</small></h3>
  <div v-for="record of records" :key="record.__dozer_record_id">{{JSON.stringify(record)}}</div>
</template>
```

### multiple endpoints with event
`useDozerEndpoints(options: DozerOnEventOption[])`

This hook can get data for multiple endpoints. Can also automagic updates if you set `eventType`.

```vue
<script setup lang="ts">
import { types_pb } from '@dozerjs/dozer';
import { useDozerEndpoints } from "@dozerjs/dozer-vue";

const options = [
  {
    endpoint: 'airports',
    eventType: types_pb.EventType.ALL
  },
  {
    endpoint: 'airports_count',
    eventType: types_pb.EventType.All,
  },
];
const data = useDozerEndpoints(options);
</script>

<template>
  <div v-for="(option, index) in options">
    <h3>{{ option.endpoint }}</h3>
    <div v-if="data[index]">
      <div v-for="record of records" :key="record.__dozer_record_id">{{JSON.stringify(record)}}</div>
    </div>
  </div>
</template>
```

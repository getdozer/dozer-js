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
This repository is a react helpers for using [Dozer](https://github.com/getdozer/dozer) as data provider.

## Installation

```bash
yarn add @dozerjs/dozer-react
```

## Usage

### Provider
```tsx
import { DozerProvider } from "@dozerjs/dozer-react";

function App () {
    return (
        <DozerProvider value={{
            serverAddress: 'http://localhost:50051',
        }}>
            {/* ... */}
        </DozerProvider>
    )
}
```


### query
`useDozerQuery(endpoint: string, query?: DozerQuery)`

This hook can be used for getting data from cache. It allows to pass [query](https://getdozer.io/docs/accessing-data/query-format). 
Query is json object serialized as string.
```tsx
import { Order } from '@dozerjs/dozer';
import { useDozerQuery } from "@dozerjs/dozer-react";

const AirportComponent = () => {
    let query = {
      orderBy: {
        start: Order.ASC
      }
    }
    const { records, fields } = useDozerQuery('airports', query);
    
    return <>{records.map(r => <div>{ r.name }</div>)}</>
}
```


### count
`useDozerCount(endpoint: string, query?: DozerQuery)`

This hook returns number of records in endpoint.
```tsx
import { useDozerCount } from "@dozerjs/dozer-react";

const AirportComponent = () => {
    const { count } = useDozerEndpointCount('airports');

    return <span>Total airports count: {count}</span>
}
```


### event
`useDozerEvent(options: { endpoint: string; eventType?: EventType; filter?: DozerFilter}[])`

This hook can create a gRPC stream to monitor real-time store modifications for multiple endpoints.

```tsx
import { useState } from 'react';
import { useDozerEvent } from "@dozerjs/dozer-react";
import { EventType, Operation } from '@dozerjs/dozer/lib/esm/generated/protos/types_pb';

const AirportComponent = () => {
   
    const [count, setCount] = useState(0);
   
    const { stream } = useDozerEvent([
        {
            endpoint: 'airports', 
            eventType: EventType.All,
        }
    ]);

    stream.on('data', (operation: Operation) => {
        setNum(pre => prev + 1);
    });
    
    return <span>Total event count: {count}</span>
}
```

## Advantage

### connect event

Here a `connect` function exported from `useDozerQuery` and `useDozerCount`, it can monitor gRPC stream exported from `useDozerEvent` and automagically updates.

```tsx
import { useDozerCount, userDozerQuery, useDozerEvent } from "@dozerjs/dozer-react";

const CountComponent = (props: { stream?: ClientReadableStream<types_pb.Operation> }) => {
 const { count, connect } = useDozerCount('airports');
 connect(stream);
 return (
    <div>
        <div>Total count: {count}</div>
        <div>* automagic updates</div>
    </div>
 )
}
const QueryComponent = (props: { stream?: ClientReadableStream<types_pb.Operation> }) => {
 const { records, connect } = useDozerQuery('airports');
 connect(stream);
 return (
    <div>
        <div>Records length: {records.length}</div>
        <div>* automagic updates</div>
    </div>
 )
}

const AirportComponent = () => {
    const { stream } = useDozerEvent({
        endpoint: 'airports',
        eventType: EventType.ALL
    });

    return (
        <div>
            <CountComponent stream={stream} />
            <QueryComponent stream={stream} />
        </div>
    )
}
```



### multiple endpoints with event
`useDozerEndpoints(options: { endpoint: string; eventType?: EventType; filter?: DozerFilter}[])`

This hook can get data for multiple endpoints. Can also automagic updates if you set `eventType`.

```tsx
import { EventType } from '@dozerjs/dozer/lib/esm/generated/protos/types_pb';
import { useDozerQuery } from "@dozerjs/dozer-react";

const AirportsComponent = () => {
    const options = [
        {
            endpoint: 'airports', 
            eventType: EventType.All,
        },
        {
            endpoint: 'airports_count', 
            eventType: EventType.All,
        },
    ];
    
    const data = useDozerEndpoints(options);
    
    return options.map((option, index) => (
        <>
            <h3>Endpoint: {option.endpoint}</h3>
            <div>
                {
                    data[index].records.map((record, idx) => <div key={idx}>{ JSON.stringify(record) }</div>)
                }
            </div>
        </>
    ))
}
```
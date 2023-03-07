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
This repository is a typescript wrapper over gRPC APIs that are automatically when you run [Dozer](https://github.com/getdozer/dozer).

## Installation

```bash

```
Simple usage of count/query messages

```typescript
import {DozerClient} from "dozer-client/src/client";
import {RecordMapper} from "dozer-client/src/helper";

const FlightsComponent = () => {
    let [count, setCount] = useState(0);
    let [records, setRecords] = useState([]);
    let flightsClient = new DozerClient("flights");
    flightsClient.count().then(setCount);
    flightsClient.query().then((r) => {
        let mapper = new RecordMapper(r.fields);
        let records = r.records.map(v => mapper.mapRecord(v.record.values));
    });
}
```

Other available option is to use events streams method `onEvent`

```typescript
import {DozerClient} from "dozer-client/src/client";
import {RecordMapper} from "dozer-client/src/helper";
import {EventType} from "dozer-client/generated/protos/types_pb";

const FlightsComponent = () => {
    let [count, setCount] = useState(0);
    let [records, setRecords] = useState([]);
    
    let flightsClient = new DozerClient("flights");
    flightsClient.getFields().then(fieldsResponse => {
        let mapper = new RecordMapper(fieldsResponse.getFields());
        let stream = flightsClient.onEvent(EventType.INSERT_ONLY);
        stream.on('data', (response) => {
            setRecords([...records, mapper.mapRecord(response.getNew().getValuesList())]);
        });
    });
}
```
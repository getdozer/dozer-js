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
</p>

## Overview
This repository provides client libraries for [Dozer](http://github.com/getdozer/dozer). 


### Libraries


#### Dozer JS Client

Typescript wrapper over several gRPC services generated automatically when you run Dozer.

```bash
yarn add @dozerjs/dozer
```
You can find usage instructions [here](./packages/js-client/README.md)

####  Dozer React

React component library that makes it convenient to create views using Dozer APIs.

```bash
yarn add @dozerjs/dozer-react
```
You can find usage instructions [here](./packages/react/README.md)



### Release

Bump the version
```bash
# pnpm version -h
# [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]

pnpm version prerelease
(or)
pnpm version prepatch
```

- `Main` creates a `beta` tag
- `v*.*.*` creates a `latest` tag
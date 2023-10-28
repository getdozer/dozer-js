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
# npm
npm install @dozerjs/dozer
# yarn
yarn add @dozerjs/dozer
# pnpm
pnpm add @dozerjs/dozer
```
You can find usage instructions [here](./packages/js-client/README.md)

####  Dozer React

React component library that makes it convenient to create views using Dozer APIs.

```bash
# npm
npm install @dozerjs/dozer-react
# yarn
yarn add @dozerjs/dozer-react
# pnpm
pnpm add @dozerjs/dozer-react
```
You can find usage instructions [here](./packages/react/README.md)


####  Dozer Vue

Vue component library that makes it convenient to create views using Dozer APIs.

```bash
# npm
npm install @dozerjs/dozer-vue
# yarn
yarn add @dozerjs/dozer-vue
# pnpm
pnpm add @dozerjs/dozer-vue
```
You can find usage instructions [here](./packages/vue/README.md)



### Release

```
pnpm run changeset
pnpm run changeset version
```


Enter and exit beta
```bash
pnpm run changeset pre enter beta
# pnpm run changeset pre exit

pnpm run version
```

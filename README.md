# GE-FNM Data Model (@ge-fnm/data-model)
The internal data model and plain-text -> internal data model parsers for the GE Field Network Manager

[![Coverage Status](https://coveralls.io/repos/github/GE-MDS-FNM-V2/data-model/badge.svg?branch=master)](https://coveralls.io/github/GE-MDS-FNM-V2/data-model?branch=master)

## I would like to use the library in my app
To get started with the repository in your project install it like this
### Install with yarn
```
yarn add @ge-fnm/data-model
```
### Install with npm
```
npm i @ge-fnm/data-model
```

### I am using this in a node.js application

Here is an example node application using the data-model
```js
const GE = require("@ge-fnm/data-model")

const Action = GE.Action
const Set = GE.Set
const Map = GE.Map
const Leaf = GE.Leaf
const DataType = GE.DataType

const child = new Leaf("world")
const tree = new Map({"hello": child})

console.log(tree)
```

### I am using this in a browser

Here is an example of how to use it in a browser
```js
import GE from "@ge-fnm/data-model"

const Action = GE.Action
const Set = GE.Set
const Map = GE.Map
const Leaf = GE.Leaf
const DataType = GE.DataType

const child = new Leaf("world")
const tree = new Map({"hello": child})

console.log(tree)
```

### Documentation
Documentation can be found here - https://ge-mds-fnm-v2.github.io/data-model/

## I want to work on this project
Please see [CONTRIBUTING.md](CONTRIBUTING.md)


### Excluding peerDependencies

On library development, one might want to set some peer dependencies, and thus remove those from the final bundle. You can see in [Rollup docs](https://rollupjs.org/#peer-dependencies) how to do that.

Good news: the setup is here for you, you must only include the dependency name in `external` property within `rollup.config.js`. For example, if you want to exclude `lodash`, just write there `external: ['lodash']`.

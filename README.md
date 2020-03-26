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

## Debugging
We've added in optional logging to this module. You can enable it by setting the environment variable DEBUG:
```sh
DEBUG=ge-fnm:data-model* yarn #to enable logging for only the data-model module
-or-
DEBUG=ge-fnm:data-model:classes:Action # to enable logging only for the Action class
-or-
DEBUG=ge-fnm:data-model:classes:* # to enable logging for all classes
-or-
DEBUG=ge-fnm:data-model:parser:yang # to enable logging only for the yang parser
-or
DEBUG=ge-fnm:data-model:parser:* # to enable logging for all data-model parsers
-or
DEBUG=ge-fnm:data-model:operations # to enable logging for data-model operations such as getPath
-or-
DEBUG=ge-fnm:* yarn # for all logging related to ge-fnm
-or-
DEBUG=* yarn # enable logging for all installed node_modules that look for the env var DEBUG - please note, this is a lot. You probably dont want this

```

## I want to work on this project
Please see [CONTRIBUTING.md](CONTRIBUTING.md)

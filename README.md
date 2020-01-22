# GE-FNM Data Model (@ge-fnm/data-model)

```
yarn add @ge-fnm/data-model
```

### yarn scripts
 - `yarn start`: Run `yarn run build` in watch mode
 - `yarn run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `yarn run test:prod`: Run linting and generate coverage
 - `yarn run build`: Generate bundles and typings, create docs
 - `yarn run lint`: Lints code
 - `yarn run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

### Excluding peerDependencies

On library development, one might want to set some peer dependencies, and thus remove those from the final bundle. You can see in [Rollup docs](https://rollupjs.org/#peer-dependencies) how to do that.

Good news: the setup is here for you, you must only include the dependency name in `external` property within `rollup.config.js`. For example, if you want to exclude `lodash`, just write there `external: ['lodash']`.

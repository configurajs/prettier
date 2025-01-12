<div align="center">
  <img src="https://github.com/user-attachments/assets/4e0a0b81-7814-48b1-ae3d-9ce0511e0e9c" width="120" height="120" alt="logo" />
  <h1>@configurajs/prettier</h1>
  <p>A simple prettier flat configuration</p>
  <p>
    <span>English</span> | 
    <a href="https://github.com/configurajs/prettier/blob/main/README.zh-CN.md">中文介绍</a>
  </p>
  <p>
    <img src="https://img.shields.io/github/package-json/v/configurajs/prettier" alt="version">
    <img src="https://img.shields.io/github/stars/configurajs/prettier" alt="stars">
    <img src="https://img.shields.io/github/license/configurajs/prettier" alt="license">
  </p>
</div>

---

## Features

- 📦 &nbsp; Provide the most basic prettier configuration
- 📦 &nbsp; Support for ordering import statements
- 📦 &nbsp; Support atomic CSS class sorting
- 📦 &nbsp; Support package json field sorting

## Quick Start

> [!TIP]
> Please make sure that the prettier version is `3.0.0+`

### Installation

```shell
# npm
npm i @configurajs/prettier -D
# yarn
yarn add @configurajs/prettier -D
# pnpm
pnpm add @configurajs/prettier -D
```

### Usage

```js
// prettier.config.js
import { defineConfig } from '@configurajs/prettier'

export default defineConfig()
```

OR

```js
// prettier.config.js
const { defineConfig } = require('@configurajs/prettier')

module.exports = defineConfig()
```

### Options

```js
// prettier.config.js
import { defineConfig } from '@configurajs/prettier'

export default defineConfig({ ... })
```

```ts
import { Config } from 'prettier'

export type DefineConfigOptions = Config & {
  /**
   * Whether to enable import sorting
   * @default true
   */
  sortImports?: boolean
  /**
   * Whether to enable atomic class sorting
   * @default true
   */
  sortAtomicClass?: boolean
  /**
   * Whether to enable package.json sorting
   * @default true
   */
  sortPackageJson?: boolean
  /**
   * Ordering of import statements
   * @default ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]']
   */
  importsOrder?: string[]
  /**
   * Ordering of package.json properties
   * @default []
   */
  packageJsonOrder?: string[]
}
```

## Contributors

<a href="https://github.com/configurajs/prettier/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=configurajs/prettier" />
</a>

## ChangeLog

[ChangeLog](CHANGELOG.md)

## License

[MIT](LICENSE)

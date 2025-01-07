<div align="center">
  <img src="https://github.com/user-attachments/assets/4e0a0b81-7814-48b1-ae3d-9ce0511e0e9c" width="120" height="120" alt="logo" />
  <h1>Prettier</h1>
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

- 📦 &nbsp; Provide universal prettier configuration
- 🛠️ &nbsp; Written based on ts, providing complete ts types
- 🌈 &nbsp; Highly scalable, easily customizable prettier config

## Intro

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

### Basic Usage

```js
// prettier.config.js
import { defineConfig } from '@configurajs/prettier'

export default defineConfig()
```

### Advanced Configuration

The default config includes two plugin [@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports) and [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss), which used to sort imports and classes.

```js
{
  printWidth: 120,
  singleQuote: true,
  semi: false,
  importOrder: ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]'],
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss']
}
```

If you don't want to enable these plugins, just update you config like this.

```js
{
  singleQuote: true,
  ...
  /**
   * set false to remove @ianvs/prettier-plugin-sort-imports plugin
   */
  sortImports: false,
  /**
   * set false to remove prettier-plugin-tailwindcss plugin
   */
  sortAtomicClass: false,
}
```

If you want to add some you favorite rules, just do it like this.

```js
// prettier.config.js
import { defineConfig } from '@configurajs/prettier'

export default defineConfig({
  // add your favorite prettier rules here
  printWidth: 100,
  quoteProps: 'as-needed',
  singleAttributePerLine: true,
})
```

## Contributors

<a href="https://github.com/configurajs/prettier/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=configurajs/prettier" />
</a>

## ChangeLog

[ChangeLog](CHANGELOG.md)

## License

[MIT](LICENSE)

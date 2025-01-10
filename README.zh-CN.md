<div align="center">
  <img src="https://github.com/user-attachments/assets/4e0a0b81-7814-48b1-ae3d-9ce0511e0e9c" width="120" height="120" alt="logo" />
  <h1>Prettier</h1>
  <p>简洁、通用的 prettier 配置</p>
  <p>
    <span>中文</span> | 
    <a href="https://github.com/configurajs/prettier/blob/main/README.md">English</a>
  </p>
  <p>
    <img src="https://img.shields.io/github/package-json/v/configurajs/prettier" alt="version">
    <img src="https://img.shields.io/github/stars/configurajs/prettier" alt="stars">
    <img src="https://img.shields.io/github/license/configurajs/prettier" alt="license">
  </p>
</div>

---

## 特性

- 📦 &nbsp; 提供最基本的 prettier 配置
- 🌈 &nbsp; 支持 import 语句排序
- 🌈 &nbsp; 支持原子化 css 类名排序
- 🌈 &nbsp; 支持 package.json 字段排序

## 快速开始

> [!TIP]
> 支持的prettier最低版本是 `3.0.0`

### 安装

```shell
# npm
npm i @configurajs/prettier -D
# yarn
yarn add @configurajs/prettier -D
# pnpm
pnpm add @configurajs/prettier -D
```

### 使用

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

### 选项

```js
// prettier.config.js
import { defineConfig } from '@configurajs/prettier'

export default defineConfig({ ... })
```

```ts
import { Config } from 'prettier'

export type DefineConfigOptions = Config & {
  /**
   * 是否启用 import 语句排序
   * @default true
   */
  sortImports?: boolean
  /**
   * 是否启用原子化 css 类名排序
   * @default true
   */
  sortAtomicClass?: boolean
  /**
   * 是否启用 package.json 字段排序
   * @default true
   */
  sortPackageJson?: boolean
  /**
   * import 语句的排序顺序
   * @default ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]']
   */
  importsOrder?: string[]
  /**
   * package.json 属性的排序顺序
   * @default []
   */
  packageJsonOrder?: string[]
}
```

## 贡献者

<a href="https://github.com/configurajs/prettier/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=configurajs/prettier" />
</a>

## 日志

[日志](CHANGELOG.md)

## 许可证

[MIT](LICENSE)

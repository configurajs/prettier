<div align="center">
  <img src="https://github.com/user-attachments/assets/4e0a0b81-7814-48b1-ae3d-9ce0511e0e9c" width="120" height="120" alt="logo" />
  <h1>Prettier</h1>
  <p>简洁、通用的prettier配置</p>
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

- 📦 &nbsp；开箱即用
- 🛠️ &nbsp；基于ts编写，提供完整的类型
- 🌈 &nbsp；高度可扩展，易于定制

## 介绍

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

### 基础使用

```js
// prettier.config.mjs
import { defineConfig } from '@configurajs/prettier'

export default defineConfig()
```

```js
// prettier.config.cjs
const { defineConfig } = require('@configurajs/prettier')

module.exports = defineConfig()
```

### 进阶配置

默认配置包含 [@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports) 和 [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss), 这两个插件用来规范引入和样式

```js
{
  printWidth: 120,
  singleQuote: true,
  semi: false,
  importOrder: ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]'],
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss']
}
```

如果你不想启用这两个插件，可参考下面示例

```js
{
  singleQuote: true,
  ...
  /**
   * 设置为false可移除 @ianvs/prettier-plugin-sort-imports
   */
  sortImports: false,
  /**
   * 设置为false可移除 prettier-plugin-tailwindcss
   */
  sortAtomicClass: false,
}
```

如果你想修改prettier规则，可参考下面示例

```js
// prettier.config.mjs
import { defineConfig } from '@configurajs/prettier'

export default defineConfig({
  // 添加你的prettier规则
  printWidth: 100,
  quoteProps: 'as-needed',
  singleAttributePerLine: true,
})
```

```js
// prettier.config.cjs
const { defineConfig } = require('@configurajs/prettier')

module.exports = defineConfig({
  // 添加你的prettier规则
  printWidth: 100,
  quoteProps: 'as-needed',
  singleAttributePerLine: true,
})
```

## 贡献者

<a href="https://github.com/configurajs/prettier/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=configurajs/prettier" />
</a>

## 日志

[日志](CHANGELOG.md)

## 许可证

[MIT](LICENSE)

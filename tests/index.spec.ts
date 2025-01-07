import { describe, expect, it } from 'vitest'
import { defineConfig } from '../dist/index.js'

describe('test config', () => {
  it('option is undefined', () => {
    expect(defineConfig()).toStrictEqual({
      printWidth: 120,
      singleQuote: true,
      semi: false,
      importOrder: ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]'],
      plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
    })
  })

  it('sortImports is false', () => {
    expect(defineConfig({ sortImports: false })).toStrictEqual({
      printWidth: 120,
      singleQuote: true,
      semi: false,
      importOrder: undefined,
      plugins: ['prettier-plugin-tailwindcss'],
    })
  })

  it('sortImports is false', () => {
    expect(defineConfig({ sortAtomicClass: false })).toStrictEqual({
      printWidth: 120,
      singleQuote: true,
      semi: false,
      importOrder: ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]'],
      plugins: ['@ianvs/prettier-plugin-sort-imports'],
    })
  })

  it('custom config', () => {
    expect(
      defineConfig({ semi: true, plugins: ['prettier-plugin-test'], vueIndentScriptAndStyle: true }),
    ).toStrictEqual({
      printWidth: 120,
      singleQuote: true,
      semi: true,
      importOrder: ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]'],
      plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss', 'prettier-plugin-test'],
      vueIndentScriptAndStyle: true,
    })
  })
})

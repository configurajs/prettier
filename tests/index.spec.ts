import { describe, expect, it } from 'vitest'
import { defineConfig } from '../dist/index.js'

describe('test config', () => {
  it('option is undefined', () => {
    expect(defineConfig()).toStrictEqual({
      printWidth: 120,
      singleQuote: true,
      semi: false,
      importOrder: ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]'],
      plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss', 'prettier-plugin-packagejson'],
      overrides: [
        {
          files: '**/package.json',
          options: {
            packageSortOrder: [],
          },
        },
      ],
    })
  })

  it('sortImports is false', () => {
    expect(defineConfig({ sortImports: false })).toStrictEqual({
      printWidth: 120,
      singleQuote: true,
      semi: false,
      importOrder: undefined,
      plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-packagejson'],
      overrides: [
        {
          files: '**/package.json',
          options: {
            packageSortOrder: [],
          },
        },
      ],
    })
  })

  it('sortAtomicClass is false', () => {
    expect(defineConfig({ sortAtomicClass: false })).toStrictEqual({
      printWidth: 120,
      singleQuote: true,
      semi: false,
      importOrder: ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]'],
      plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-packagejson'],
      overrides: [
        {
          files: '**/package.json',
          options: {
            packageSortOrder: [],
          },
        },
      ],
    })
  })

  it('sortPackageJson is false', () => {
    expect(defineConfig({ sortPackageJson: false })).toStrictEqual({
      printWidth: 120,
      singleQuote: true,
      semi: false,
      importOrder: ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]'],
      plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
      overrides: [],
    })
  })

  it('custom packageSortOrder', () => {
    expect(defineConfig({ packageSortOrder: ['name', 'version', 'description', 'scripts'] })).toStrictEqual({
      printWidth: 120,
      singleQuote: true,
      semi: false,
      importOrder: ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]'],
      plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss', 'prettier-plugin-packagejson'],
      overrides: [
        {
          files: '**/package.json',
          options: {
            packageSortOrder: ['name', 'version', 'description', 'scripts'],
          },
        },
      ],
    })
  })

  it('custom config', () => {
    expect(
      defineConfig({
        semi: true,
        plugins: ['prettier-plugin-test'],
        vueIndentScriptAndStyle: true,
        overrides: [
          {
            files: '*.md',
            options: {
              organizeImportsSkipDestructiveCodeActions: true,
            },
          },
        ],
      }),
    ).toStrictEqual({
      printWidth: 120,
      singleQuote: true,
      semi: true,
      importOrder: ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]'],
      plugins: [
        '@ianvs/prettier-plugin-sort-imports',
        'prettier-plugin-tailwindcss',
        'prettier-plugin-packagejson',
        'prettier-plugin-test',
      ],
      overrides: [
        {
          files: '**/package.json',
          options: {
            packageSortOrder: [],
          },
        },
        {
          files: '*.md',
          options: {
            organizeImportsSkipDestructiveCodeActions: true,
          },
        },
      ],
      vueIndentScriptAndStyle: true,
    })
  })
})

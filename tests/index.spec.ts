import { describe, expect, it } from 'vitest'
import { defineConfig } from '../dist/index.js'

describe('test config', () => {
  it('option is undefined', () => {
    expect(defineConfig()).toMatchSnapshot()
  })

  it('sortImports is false', () => {
    expect(defineConfig({ sortImports: false })).toMatchSnapshot()
  })

  it('sortAtomicClass is false', () => {
    expect(defineConfig({ sortAtomicClass: false })).toMatchSnapshot()
  })

  it('sortPackageJson is false', () => {
    expect(defineConfig({ sortPackageJson: false })).toMatchSnapshot()
  })

  it('custom importsOrder', () => {
    expect(defineConfig({ importsOrder: ['^@/(.*)$', '^~/(.*)$', '^[.]'] })).toMatchSnapshot()
  })

  it('custom packageJsonOrder', () => {
    expect(defineConfig({ packageJsonOrder: ['name', 'version'] })).toMatchSnapshot()
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
    ).toMatchSnapshot()
  })
})

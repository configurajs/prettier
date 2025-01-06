import { PluginConfig } from '@ianvs/prettier-plugin-sort-imports'
import { Config as PrettierConfig } from 'prettier'
import { normalizeToArray } from 'rattail'

export type Config = PrettierConfig & PluginConfig

export type DefineConfigOptions = Config & {
  sortImports?: boolean
  sortAtomicClass?: boolean
}

export function defineConfig(options: DefineConfigOptions = {}): Config {
  const { sortImports = true, sortAtomicClass = true, plugins = [], ...rest } = options

  const builtinPlugins: string[] = []

  if (sortImports) {
    builtinPlugins.push('@ianvs/prettier-plugin-sort-imports')
  }

  if (sortAtomicClass) {
    builtinPlugins.push('prettier-plugin-tailwindcss')
  }

  return {
    printWidth: 120,
    singleQuote: true,
    semi: false,
    importOrder: sortImports
      ? ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]']
      : undefined,
    plugins: [...builtinPlugins, ...normalizeToArray(plugins)],
    ...rest,
  }
}

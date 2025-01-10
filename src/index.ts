import { Config } from 'prettier'
import { normalizeToArray } from 'rattail'

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

export function defineConfig(options: DefineConfigOptions = {}): Config {
  const {
    sortImports = true,
    sortAtomicClass = true,
    sortPackageJson = true,
    importsOrder = ['<BUILTIN_MODULES>', '^vue$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[.]'],
    packageJsonOrder = [],
    plugins = [],
    ...rest
  } = options

  const builtinPlugins: string[] = []

  if (sortImports) {
    builtinPlugins.push('@ianvs/prettier-plugin-sort-imports')
  }

  if (sortAtomicClass) {
    builtinPlugins.push('prettier-plugin-tailwindcss')
  }

  if (sortPackageJson) {
    builtinPlugins.push('prettier-plugin-packagejson')
  }

  return {
    printWidth: 120,
    singleQuote: true,
    semi: false,
    importOrder: sortImports ? importsOrder : undefined,
    packageSortOrder: sortPackageJson ? packageJsonOrder : undefined,
    plugins: [...builtinPlugins, ...normalizeToArray(plugins)],
    ...rest,
  }
}

import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import peerDeps from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')

const peerDependencies = Object.keys(packageJson.peerDependencies || {})
const dependencies = Object.keys(packageJson.dependencies || {})

const external = [...peerDependencies, ...dependencies]

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    external,
    plugins: [
      nodeResolve({ browser: true, preferBuiltins: false }),
      typescript({ tsconfig: './tsconfig.json' }),
      peerDeps({ includeDependencies: true }),
      commonjs(),
      terser(),
      postcss({ extensions: ['.css', '.scss'] })
    ]
  }
]

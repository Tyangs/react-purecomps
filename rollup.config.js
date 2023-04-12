import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.ts',
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: 'dist/esm/index.ts',
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript(), terser()],
  },
];

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  {
    input: ['./src/index.ts'],
    output: {
      dir: 'dist',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        exclude: [/\.test.((js|jsx|ts|tsx))$/],
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: 'dist',
      }),
      terser(),
      copy({
        targets: [
          { src: 'src/styles/idsk3_theme.css', dest: 'dist/styles' },
        ]
      })
    ],
  }
];

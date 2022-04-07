import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { getFiles } from './scripts/buildUtils';

const packageJson = require("./package.json");

const extensions = ['.ts', '.tsx'];
const excludedExtensions = ['.test.ts', '.test.tsx'];

export default [
  {
    input: [
      './src/index.ts',
      ...getFiles('./src/components/Atoms', extensions, excludedExtensions),
      ...getFiles('./src/components/Icons', extensions, excludedExtensions),
      ...getFiles('./src/components/Molecules', extensions, excludedExtensions),
      ...getFiles('./src/components/Organisms', extensions, excludedExtensions),
      ...getFiles('./src/components/Templates', extensions, excludedExtensions),
    ],
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        exclude: [
          // Exclude test files
          /\.test.((js|jsx|ts|tsx))$/,
          // Exclude story files
          /\.stories.((js|jsx|ts|tsx|mdx))$/,
        ],
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
  },
];

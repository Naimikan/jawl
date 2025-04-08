'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var path = require('path');
var typescript = require('@rollup/plugin-typescript');
var resolve = require('@rollup/plugin-node-resolve');
require('@rollup/plugin-terser');
var deleteFolder = require('rollup-plugin-delete');
var replace = require('@rollup/plugin-replace');
var summary = require('rollup-plugin-summary');
var peerDepsExternal = require('rollup-plugin-peer-deps-external');

const sourcePath = path.resolve(__dirname, './src');

var rollup_config = {
  input: 'src/index.ts',
  output: [
    {
      file: path.resolve(__dirname, 'dist/index.js'),
      format: 'esm',
      minifyInternalExports: true,
      compact: true,
    },
    {
      file: path.resolve(__dirname, 'dist/index.cjs'),
      format: 'cjs',
      minifyInternalExports: true,
      compact: true,
    },
  ],
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    deleteFolder({ targets: 'dist/*' }),

    peerDepsExternal(),

    replace({ preventAssignment: false, 'Reflect.decorate': 'undefined' }),
    resolve(),
    typescript({
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
      declaration: true,
      declarationDir: 'dist/types',
    }),
    // terser({
    //   ecma: 2021,
    //   module: true,
    //   warnings: true,
    //   compress: {
    //     drop_console: true,
    //     pure_funcs: ['console.info', 'console.debug'],
    //   },
    //   mangle: {
    //     properties: {
    //       regex: /^__/,
    //     },
    //   },
    // }),
    summary(),
  ],
  external: id => (!id.startsWith(sourcePath) && !/^\.\.?\//.test(id)) || id === 'lit',
};

exports.default = rollup_config;

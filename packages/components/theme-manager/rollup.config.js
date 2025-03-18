import path from 'path';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import deleteFolder from 'rollup-plugin-delete';
import replace from '@rollup/plugin-replace';
import summary from 'rollup-plugin-summary';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const sourcePath = path.resolve(__dirname, './src');

export default {
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
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
      compress: {
        drop_console: true,
        pure_funcs: ['console.info', 'console.debug'],
      },
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
  external: id => (!id.startsWith(sourcePath) && !/^\.\.?\//.test(id)) || id === 'lit',
};

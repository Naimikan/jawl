import path from 'path';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import summary from 'rollup-plugin-summary';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: path.resolve(__dirname, 'dist/index.js'),
			format: 'esm',
			plugins: [terser()],
			sourcemap: true,
		}, {
      file: path.resolve(__dirname, 'dist/index.debug.js'),
      format: 'esm',
      sourcemap: true,
    }
	],
	onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
	plugins: [
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
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
		}),
		summary(),
	],
	external: ['lit']
}

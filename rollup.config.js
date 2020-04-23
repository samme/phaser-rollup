import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		replace({
			'typeof CANVAS_RENDERER': JSON.stringify(true),
			'typeof WEBGL_RENDERER': JSON.stringify(true),
			'typeof EXPERIMENTAL': JSON.stringify(true),
			'typeof PLUGIN_CAMERA3D': JSON.stringify(false),
			'typeof PLUGIN_FBINSTANT': JSON.stringify(false),
			'typeof FEATURE_SOUND': JSON.stringify(true)
		}),
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		production && terser() // minify, but only in production
	]
};

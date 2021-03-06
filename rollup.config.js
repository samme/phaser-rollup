import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import url from '@rollup/plugin-url';
import alias from '@rollup/plugin-alias';
import strip from '@rollup/plugin-strip';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;
const on = JSON.stringify(true);
const off = JSON.stringify(false);

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife', // suitable for <script> tags
    sourcemap: false
  },
  plugins: [
    replace({
      'typeof CANVAS_RENDERER': on,
      'typeof EXPERIMENTAL': off,
      'typeof FEATURE_SOUND': off,
      'typeof PLUGIN_CAMERA3D': off,
      'typeof PLUGIN_FBINSTANT': off,
      'typeof WEBGL_RENDERER': off
    }),
    resolve(), // find packages in node_modules
    commonjs(), // convert 'phaser' to ES modules
    alias({
      entries: {
        phaser: './node_modules/phaser/src/phaser'
        // phaser: './node_modules/phaser/src/phaser-arcade-physics'
        // phaser: './node_modules/phaser/src/phaser-core'
      }
    }),
    url({
      include: '**/assets/**/*',
      fileName: '[name].[hash][extname]',
      limit: 0
    }),
    production && strip(),
    production && terser() // minify, but only in production
  ]
};

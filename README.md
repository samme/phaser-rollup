Phaser 3 with Rollup 🗞
====================

Getting started
---------------

Clone or download this repository and install its dependencies:

```bash
git clone https://github.com/samme/phaser-rollup.git my-phaser-game
# OR
npx degit "samme/phaser-rollup" my-phaser-game

cd my-phaser-game
npm install
npm run dev
```

- `npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.
- `npm start` launches a server, using [serve](https://github.com/zeit/serve).
- `npm run watch` will continually rebuild the application as your source files change.
- `npm run dev` will run `npm start` and `npm run watch` in parallel.

Phaser
------

Set build constants in `rollup.config.js`.

TODO
----

- [buble](https://github.com/rollup/plugins/blob/master/packages/buble)
- [commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs#options)
- [livereload](https://github.com/thgh/rollup-plugin-livereload)

License
-------

[MIT](LICENSE).

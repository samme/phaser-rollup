Phaser 3 with Rollup 🗞
====================

Getting started
---------------

Clone or download this repository and install its dependencies:

```bash
git clone https://github.com/samme/phaser-rollup.git my-phaser-game
cd my-phaser-game
npm install
```

or

```bash
npx degit "rollup/samme/phaser-rollup" my-phaser-game
cd my-phaser-game
npm install
```

The `public/index.html` file contains a `<script src='bundle.js'>` tag. The `rollup.config.js` file tells Rollup how to create this bundle, starting with `src/main.js` and including all its dependencies.

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve).

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

TODO
----

Yes.

License
-------

[MIT](LICENSE).

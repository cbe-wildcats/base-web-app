Base structure for web apps
===========================

This repository contains the base structure I'm using as a template for my web apps.

Features
--------

* In-browser compilation, for development
* Build script, for production

Libraries
---------

These libraries are included in this repository. If you want to use this base structure, please check the version of these libraries.

* [Require.js](https://github.com/jrburke/requirejs) 2.1.6
* [Almond](https://github.com/jrburke/almond) 0.2.5
* [AMD CoffeeScript loader plugin](https://github.com/jrburke/require-cs) 0.4.3 with [experimental source map support](https://gist.github.com/lavrton/5425945)
* [CoffeeScript](https://github.com/jashkenas/coffee-script) 1.6.2
* [LESS](https://github.com/cloudhead/less.js) 1.4.0 beta 4
* [Bootstrap](https://github.com/twitter/bootstrap) 2.3.1

Usage
-----

For development, point a web server towards the `src` directory.

For production, run `./build.sh` to create a combined minified build in the `build` directory, created by the build script. This will contain `index.html` (copied from `src/release.html`), `js.js` and `css.css`.

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

* [Require.js](https://github.com/jrburke/requirejs) 2.1.15
* [Almond](https://github.com/jrburke/almond) 0.3.0
* [AMD CoffeeScript loader plugin](https://github.com/jrburke/require-cs) 0.5.0
* [CoffeeScript](https://github.com/jashkenas/coffee-script) 1.8.0
* [LESS](https://github.com/cloudhead/less.js) 2.2.0
* [Bootstrap](https://github.com/twitter/bootstrap) 3.3.1 (minimally configured; enable features in `src/lib/bootstrap/bootstrap.less`!)

Usage
-----

For development, point a web server towards the `src` directory.

For production, run `./build.sh` to create a combined minified build in the `build` directory, created by the build script. This will contain `index.html` (copied from `src/release.html`), `js.js` and `css.css`.

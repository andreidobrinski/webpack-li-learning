# Notes

## Webpack 1

- takes all assets and creates a production-ready bundle
- all files going in are considered "modules"

_Why use webpack?_

- avoids loading a bunch of scripts tags
- avoids unintended consequences from multiple script tags
  - overwrite global vars
  - functions being called before others
  - order matters with script tags
- avoids multiple http requests for script tags

Webpack...

- creates a dependency graph
- require assets into webpack
- loads only needed assets
  - code splitting
  - faster initial load
- avoid code re-downloading
- transpiles SASS or LESS into CSS
- transpiles React and ES6 into vanilla JS
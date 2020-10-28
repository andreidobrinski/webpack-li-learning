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

Webpack loaders

- perform transformations on files
- help load files and images
- used with JS dialects
  - Babel used to transpile
- `babel-loader` and `babel-core` used
- Babel 6: all transformations are opt-in, unlike previous versions of Babel

Webpack and CSS

- bundles only styles that the app uses
- import or require styles for use with certain files
- transforms SASS to CSS
- put image and url loader above CSS

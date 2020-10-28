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

Code Splitting

- optimize code performance and dev workflow
- automate transpiling
- break code up into different bundles
- different entry points
- creates a different bundle for each entry point
- use webpack for shared code or vendor code
- creates a common file for modules that share libraries or code
  - can be preloaded and cached

Webpack dev server

- uses node
- webpack-dev-middleware bundle
- uses socker.io to listen for changes

## Webpack 3

Babel loaders

- `babel-loader`, `babel-core`, `babel-present-env`
- also `babel-preset-react`
- check that .babelrc presets match the presets in webpack config babel loader

Passing `--progress` to webpack call shows progress of build

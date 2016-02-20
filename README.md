# babel/webpack/express/react/react-router starter pack #

Turns out it takes approximately forever to get a simple project setup going. This is an attempt to provide a baseline for (mostly my personal) projects to get up and running. Also useful as an example for others.

YMMV, but feedback welcome.

## Features ##
- linting via eslint, run `npm run lint`
- es2015 and jsx via babel, compiled on a save trigger in development
- front-end js packaging via webpack, including a webpack dev server and the react hot loader for development
- less compilation via webpack, so that changes show up immediately after a save + refresh
- symlink the app to node_modules/app, so that all local imports are relative to 'app'
- express app set up to serve static files using its middleware for certain paths, else fall back to react-router
- react and react-router setup to do server-side view rendering and routing - choose your own data fetching layer
- react and react-router for client side view rendering and routing, too
- single routes file for shared client/server routing

## Project setup ##
root:
- .babelrc - for babel config
- .eslintrc - for eslint config
- .gitignore
- gulpfile.js - for gulp tasks
- src/ - directory for all source files
- lib/ - directory generated for processed source files

src:
- client/ - js modules used only on the client side
- server/ - js modules used only on the server side
- shared/ - js modules used - you guessed it - both on the client and server side
- static/ - static files eg images
- conf/ - js modules to store common config; note that modules _can_ be shared between the client and server
- views/ - contains jade views rendered via the express view engine

src/server:
- server.js - runs an express server
- webpack.js - runs a webpack dev server

src/shared:
- routes.js - contains routes for the react-router managed application

src/conf:
- Config.js - app-wide js config
- Config.dev.js.example - copy (and modify as needed) to gitignored Config.dev.js
- webpack.config.dev.js - webpack config used during development
- webpack.config.production.js - webpack config used for production

## Running the project (development) ##
- copy src/conf/Config.dev.js.example to src/conf/Config.dev.js, modify as needed
- `npm install`, which will run a set of important postinstall tasks
- `npm start`, which will set up the babel file watching, the webpack dev server, the gulp file watching and start a nodemon server

## Running the project (production) ##
The postinstall scripts will do all of the setup for you. Either start your server with `npm run server`, or use the provided Procfile. For heroku, a simple `heroku create` followed by `git push` should be enough.

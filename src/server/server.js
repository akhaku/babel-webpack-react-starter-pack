/* eslint-env node */
import express from 'express';
import {match, RouterContext} from 'react-router';

import Config from 'app/conf/Config';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import routes from 'app/shared/routes';

const app = express();

app.set('views', './src/views');
app.set('view engine', 'jade');

app.use(Config.baseJsPath, express.static('lib/static/js'));
app.use(Config.baseImagePath, express.static('lib/static/img'));

app.use((req, res, unusedNext) => {
  match({
    routes,
    location: req.originalUrl,
  }, (error, redirectLocation, renderProps) => {
    const content = ReactDOMServer.renderToString(<RouterContext {...renderProps}/>);
    res.render('index', {
      content,
      baseCssUrl: Config.baseCssUrl,
      baseJsUrl: Config.baseJsUrl,
    });
  });
});

const server = app.listen(Config.appPort, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});

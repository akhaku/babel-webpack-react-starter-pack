import _ from 'lodash';
import WebpackDevServer from 'webpack-dev-server';
import Webpack from 'webpack';

import Config from 'app/conf/Config';
import WebpackConfig from 'app/conf/webpack.config.dev';

var server = new WebpackDevServer(Webpack(WebpackConfig), {
  publicPath: WebpackConfig.output.publicPath,
  hot: true,
  stats: {colors: true},
});

server.listen(Config.webpackDevServerPort, Config.webpackDevServerHost, _.noop);


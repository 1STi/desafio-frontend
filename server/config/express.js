var path = require('path');
var express = require('express');
var rootPath = path.normalize(__dirname + '/../../');
var webpack = require('webpack');
var webpackConfig = require(rootPath + 'webpack');

module.exports = function() {
  var app = express();

  app.set('port', 4000);

  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.use(express.static(rootPath +'/frontend'));

  (function initWebpack() {
    var compiler = webpack(webpackConfig);
    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler, {
      log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
  })();

  app.get('*', function root(req, res) {
    res.sendFile(rootPath + 'frontend/index.html');
  });

  return app;
};

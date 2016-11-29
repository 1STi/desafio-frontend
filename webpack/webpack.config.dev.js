var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var cssLoaders = 'style!css';
var scssLoaders = cssLoaders + '!sass';
var sassLoaders = scssLoaders + '?indentedSyntax=sass';

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './frontend/vendor',
    './frontend/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:4000'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.scss', '.sass',  '.styl'],
    alias: {
      'root': path.resolve('frontend')
    }
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader" },
      { test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader" },
      { test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=img/img-[hash:6].[ext]" },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: cssLoaders },
      { test: /\.sass$/, loader: sassLoaders },
      { test: /\.scss$/, loader: scssLoaders },
			{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  }
};

const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Terser = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: path.join(__dirname, 'src', 'index'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.min.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? 'style.css' : 'style.min.css',
      chunkFilename: devMode ? 'chunck.css' : 'chunk.min.css',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: /src/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html/,
        exclude: /public/,
        include: /src/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.css/,
        exclude: [/public/, /node_modules/],
        include: /src/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}/css/`,
            },
          },
          'css-loader',
        ],
      },
    ],
  },

  optimization: {
    minimizer: [
      new Terser({
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
      }),
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3333,
  },
}

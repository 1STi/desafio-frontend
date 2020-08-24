const path = require('path')
const webpack = require('webpack')
// Plugin to incorporate html files into the app build //
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'css': path.resolve(__dirname, 'assets/css/index.scss'), //  styles
        'app': path.resolve(__dirname, 'assets/js') // app
    },
    output: {
        path: path.resolve(__dirname, 'public/src'),
        filename: '[name].[ext]',
        publicPath: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                use: [
                    {
                        options: {
                            cache: true,
                            formatter: require.resolve('react-dev-utils/eslintFormatter'),
                            eslintPath: require.resolve('eslint'),
                            resolvePluginsRelativeTo: __dirname,
                        },
                        loader: 'eslint-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            path: path.resolve(__dirname, '../'), // Go back one level before ./assets to get index.html temlate
            filename: '../index.html' // Go back one level before ./public/src to place compiled html
        })
    ],
    performance:{
        hints: 'warning'
    },
    devtool: "source-map",
    target: 'web'
}
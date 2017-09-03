'use strict'

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Debugging config
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    // Dev-server
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    // Entrypoint
    path.join(__dirname, '../src/index.js')
  ],
  output: {
    // Put outputted files into dist folder
    path: path.join(__dirname, '..', '/dist/'),

    // Calc output file name dynamically,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules'
    ]
  },
  plugins: [
    // Generate html5 file, which includes all webpack bundles in the body
    // using script tags
    // Takes a template file as input and outputs it to the dist folder
    new HtmlWebpackPlugin({
      template: path.join('src', 'index.tpl.html'),
      inject: 'body',
      filename: 'index.html'
      // TODO favicon: 'src/img/favicon.png'
    }),

    // Not 100% what this does, but its use is highly recommended by the
    // official webpack docs, so I obey ;)
    new webpack.optimize.OccurrenceOrderPlugin(),

    // Refreshes app inside the browser on file save
    new webpack.HotModuleReplacementPlugin(),

    // Prevents webpack CLI from stopping if errors occur
    new webpack.NoEmitOnErrorsPlugin(),

    // better readable module names in the browser on HMR updates
    new webpack.NamedModulesPlugin(),

    // Helps passing variables between webpack and js-files
    // Gives us the ability to e.g. switch between dev and production environment
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },

  module: {
    rules: require('./webpack.loaders.js')
  }
}

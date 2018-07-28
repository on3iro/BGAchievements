'use strict'

const path = require('path')
const argv = require('yargs').argv
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const ENVS = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development'
}

// Determine build env
const TARGET_ENV = process.env.NODE_ENV
const isDev = TARGET_ENV === ENVS.DEVELOPMENT
const isProd = TARGET_ENV === ENVS.PRODUCTION

// Entry and output path/filename variables
const entryPath = path.join(__dirname, 'src/index.js')
const outputPath = path.join(__dirname, 'dist')
const outputFilename = isProd ? '[name]-[hash].js' : '[name].js'

console.log(`Webpack started. Building for ${TARGET_ENV}`)

console.log(path.join(__dirname, 'index.html'))
const commonConfig = {
  output: {
    // Put outputted files into dist folder
    path: outputPath,

    // Calc output file name dynamically,
    filename: `${outputFilename}`
  },
  resolve: {
    // Automatically resolves those extensions so they can be omitted when
    // importing a file of those types
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'src']
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        // Transpile ES6
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react']
            }
          },
          {
            loader: 'stylelint-custom-processor-loader',
            options: {
              configPath: './.stylelintrc'
            }
          }
        ]
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limi=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          }
        ]
      }
    ]
  }, // end module
  plugins: [
    // Generate html5 file, which includes all webpack bundles in the body
    // using script tags
    // Takes a template file as input and outputs it to the dist folder
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
      // TODO favicon: 'src/img/favicon.png'
    })
  ]
}

// Additional settings for local dev env
const FlowWebpackPlugin = require('flow-webpack-plugin')
if (isDev) {
  module.exports = merge(commonConfig, {
    mode: 'development',
    entry: [
      // Dev-server
      'webpack/hot/only-dev-server',

      'react-hot-loader/patch',

      // Entrypoint
      entryPath
    ],
    // Debugging config
    devtool: 'eval-source-map',
    devServer: {
      // contentBase: './src',
      hot: true,
      host: '0.0.0.0',
      port: 3000,
      historyApiFallback: true,
      disableHostCheck: true,
      stats: 'minimal'
    },
    module: {
      rules: [
        {
          // Lint with standard
          test: /\.(js|jsx)?$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: {
            loader: 'standard-loader',
            options: {
              error: false,
              snazzy: true
            }
          }
        }
      ] // end rules
    }, // end module
    plugins: [
      // Refreshes app inside the browser on file save
      new webpack.HotModuleReplacementPlugin(),

      // flow type checking
      new FlowWebpackPlugin(),

      // Nicer webpack logs in the console
      new FriendlyErrorsWebpackPlugin()
    ]
  })
}

// additional production env settings
if (isProd) {
  module.exports = merge(commonConfig,
    (argv.analyze ? { plugins: [ new BundleAnalyzerPlugin() ] } : {}),
    {
      mode: 'production',
      entry: [
        entryPath
      ],
      module: {
        rules: [] // end rules
      }, // end module
      plugins: [
      ] // end plugins
    }
  )
}

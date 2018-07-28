'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

// Get local ip adress
const os = require('os')
const netwIfs = os.networkInterfaces()
const LOCAL_INTERFACES =
  Object.getOwnPropertyNames(netwIfs)
    .map(key => netwIfs[key])
    .reduce((acc, netArr) => [ ...acc, ...netArr ], [])
    .filter(details => details.family === 'IPv4' && !details.internal)
const LOCAL_IP = LOCAL_INTERFACES[0].address

const prod = 'production'
const dev = 'development'

// Determine build env
const TARGET_ENV = process.env.NODE_ENV
const isDev = TARGET_ENV === dev
const isProd = TARGET_ENV === prod

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
  module: {
    rules: [
      {
        // Transpile ES6
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
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
    }),

    // Not 100% what this does, but its use is highly recommended by the
    // official webpack docs, so I obey ;)
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
}

// Additional settings for local dev env
const FlowWebpackPlugin = require('flow-webpack-plugin')
if (isDev) {
  module.exports = merge(commonConfig, {
    entry: [
      'babel-polyfill',

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

      // Prevents webpack CLI from stopping if errors occur
      new webpack.NoEmitOnErrorsPlugin(),

      // better readable module names in the browser on HMR updates
      new webpack.NamedModulesPlugin(),

      // flow type checking
      new FlowWebpackPlugin(),

      // Nicer webpack logs in the console
      new FriendlyErrorsWebpackPlugin(),

      // Helps passing variables between webpack and js-files
      // Gives us the ability to e.g. switch between dev and production environment
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.LOCAL_IP': JSON.stringify(LOCAL_IP)
      })
    ]
  })
}

// additional production env settings

if (isProd) {
  module.exports = merge(commonConfig, {
    entry: [
      'babel-polyfill',
      entryPath
    ],
    module: {
      rules: [] // end rules
    }, // end module
    plugins: [
      // Split bundle into vendor and manifest files
      // This way clients don't need to reload all
      // vendor assets, whenever the main app changes
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
          return module.context && module.context.indexOf('node_modules') !== -1
        }
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      }),

      // JS uglifying
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
          screw_ie8: true
        }
      }),

      // Helps passing variables between webpack and js-files
      // Gives us the ability to e.g. switch between dev and production environment
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ] // end plugins
  })
}

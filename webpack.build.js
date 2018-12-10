const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = env => {
  return {
    entry: [
      './src/index.js'
    ],
    output: {
      path: `${__dirname}/dist`,
      publicPath: '/',
      filename: 'bundle.js.gz'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader',
            }
          ]
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'url-loader?limit=10000',
        },
        {
          test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
          use: 'file-loader',
        },
        {
            test: /\.(png|jpg|jpeg|gif|ico)$/,
            use: 'url-loader?limit=10000'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV || 'development')
      }),
      new HtmlWebpackPlugin({
          template: './client/index.html',
      }),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
};

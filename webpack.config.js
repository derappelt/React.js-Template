var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app/app.jsx',
  output: { path: __dirname, filename: 'dist/bundle.js' },
  devServer: {
    contentBase: "./",
    hot: true,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  externals:{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      })
    ]
};

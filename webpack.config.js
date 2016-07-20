var path = require('path');

module.exports = {
  entry: './index',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: 'browser-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  }
};

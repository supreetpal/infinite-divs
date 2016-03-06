var webpack = require("webpack");

module.exports = {
  entry: './src/controller',
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: "babel" }
    ]
  }
};

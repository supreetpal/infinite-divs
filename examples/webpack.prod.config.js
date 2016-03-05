module.exports = {
  entry: './src/controller',
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: "babel" }
    ]
  }
};

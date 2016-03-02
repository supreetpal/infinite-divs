module.exports = {
  entry: "./src/infinitedivs.js",
  output: {
    path: './lib',
    filename: "infinitedivs.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js?$/, loader: "babel" }
    ]
  }
};

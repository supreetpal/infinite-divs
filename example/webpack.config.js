module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/controller'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: "babel" }
    ]
  }
};

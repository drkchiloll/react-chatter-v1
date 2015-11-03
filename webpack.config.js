var path = require('path'),
    webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry : {
    main: [
      'webpack-dev-server/client?http://localhost:8000',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]
  },
  output: {
    filename: './bundle.js',
    path : path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      loader: 'react-hot!babel'
    }, {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      loader: 'style!css!sass'
    }]
  }
};

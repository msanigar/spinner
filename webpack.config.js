var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer  = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index.js',
    './styles/main.scss'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
      { 
        test: /\.scss$/, 
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          loader: "css-loader!sass-loader!postcss-loader",
        }),
      },
      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'svg-url-loader?limit=10000&mimetype=image/svg+xml' 
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.LoaderOptionsPlugin({
      options: {
          postcss: [autoprefixer]
      }
    })
  ]
}

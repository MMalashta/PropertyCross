import webpack from 'webpack'
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    `${__dirname}/src/root.js`
  ],
  output: {
    path: `${__dirname}/static/`,
    filename: 'bundle.js'
  },
  plugins: [
    hotModuleReplacementPlugin
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: `${__dirname}/src/`
      }
    ]
  }
}

import webpack from 'webpack'
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()
const noEmitOnErrorsPlugin = new webpack.NoEmitOnErrorsPlugin()

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
    hotModuleReplacementPlugin,
    noEmitOnErrorsPlugin
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: `${__dirname}/src/`
      },
      {
        test: /\.(scss|sass|css)$/,
        loader: 'style-loader!css-loader!sass-loader?cacheDirectory'
      }
    ]
  }
}

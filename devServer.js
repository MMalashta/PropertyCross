import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.config'
import express from 'express'
import config from './src/config'

const app = new express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/static/index.html')
})

app.listen(config.port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info(`Hot Loader serves on port ${config.port}`)
  }
})

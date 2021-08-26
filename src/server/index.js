const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('../../webpack.config')
const compiler = webpack(webpackConfig)
const express = require('express')
const routes = require('./routes')
const app = express()
const path = require('path')

// enable webpack hot module replacement and dev middlware
app.use(webpackDevMiddleware(compiler, { stats: 'errors-only' }))
app.use(express.static(path.resolve(__dirname, '../../dist')))
routes(app)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})

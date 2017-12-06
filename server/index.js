const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const renderer = require('./renderer')
const paths = require('../config/paths')
const app = express()

if( process.env.NODE_ENV === 'production' ) {
	app.use(compression())
}
app.use(favicon(path.resolve(paths.public, 'favicon.ico')))
app.use(express.static(paths.public))
app.use(renderer)
app.listen(8000, () => {
	console.log('Server Ready 8000')
})
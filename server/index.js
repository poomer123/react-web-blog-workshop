const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const renderer = require('./renderer')
const paths = require('../config/paths')
const app = express()

app.use(favicon(path.resolve(paths.public, 'favicon.ico')))
app.use(express.static(paths.public))
app.use(renderer)
app.listen(8000, () => {
	console.log('Server Ready 8000')
})
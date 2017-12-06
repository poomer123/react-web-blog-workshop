const path = require('path')
const paths = require('../config/paths')
const getMarkupWithAssets = require('./getMarkupWithAssets')

const filepath = path.resolve(paths.public, 'csr.prod.html')
const markup = getMarkupWithAssets(filepath)

module.exports = (req, res) => {
	res.send(markup)
}
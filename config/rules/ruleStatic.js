module.exports = {
    test: /\.(jpe?g|png|gif|bmp)$/,
    loader: 'url-loader',
    options: {
      limit: 50000
    }
}

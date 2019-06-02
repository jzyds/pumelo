const path = require('path');

module.exports = {
  entry: {
    pumelo: './index.js',
    pumeloDom: './dom.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '[name]'
  },
	optimization: {
		// We no not want to minimize our code.
		minimize: true
	},
};
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'pumelo.js',
    path: path.resolve(__dirname, 'dist'),
    library: "pumelo"
  },
	optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
};
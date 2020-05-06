const path = require("path");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  entry: {
    pumelo: "./index.js",
    pumeloDom: "./dom.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "[name]",
  },
  optimization: {
    // We no not want to minimize our code.
    minimize: true,
  },
  mode: "production",
  plugins: [
    // To strip all locales except “en”
    new MomentLocalesPlugin(),
  ],
};

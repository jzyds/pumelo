const path = require("path");

module.exports = {
  entry: {
    pumelo: "./src/index.ts",
    pumeloDom: "./src/dom.ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
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
};

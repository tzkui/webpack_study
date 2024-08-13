const path = require("path");
const TerserPlugin = require("terser-webpack-plugin")
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  optimization: {
    minimize: false,
    minimizer: [new TerserPlugin({
      extractComments: false, //不将注释提取到单独的文件中
    })],
  },
  entry: {
    index: "./src/index.js",
    print: "./src/print.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename:"main.js"
    filename:"[name].bundle.js"
  },
}
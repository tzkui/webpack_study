const path = require("path");
const TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: false, //不将注释提取到单独的文件中
    })],
    runtimeChunk: 'single',
  },
  devtool: 'inline-source-map',
  entry: {
    index: "./src/index.js",
    print: "./src/print.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename:"main.js"
    filename:"[name].bundle.js",
    clean: true,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  devServer: {
    static: "./dist"
  }
}
const { default: merge } = require("webpack-merge")
const common = require("./webpack.common")
const path = require("path")

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "dist")
    },
    hot: true,
    liveReload: true,
    historyApiFallback: true
  },
  target: "web",
  devtool: "eval-source-map",
  module: {
    rules: []
  }
}

module.exports = merge(common, devConfig)

const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  entry: "./index.js",
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, "../build"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    assetModuleFilename: "images/[hash][ext][query]"
  },
  optimization: {
    runtimeChunk: undefined,
    splitChunks: {
      chunks: "async",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "async"
        }
      }
    }
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        use: "babel-loader",
        test: /.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        type: "asset/inline",
        test: /\.(png|svg|jpg|jpeg|gif)$/i
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: "asset-resource"
        }
      },
      { test: /\.html$/, use: 'html-loader'},
      { test: /\.(mov|mp4)$/, use: 'url-loader' }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}

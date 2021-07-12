const { merge } = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require("./webpack.common")
const packageJson = require("../package.json")

const MARKETING_PORT = 8001

const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${MARKETING_PORT}/`
  },
  devServer: {
    port: MARKETING_PORT,
    historyApiFallback: {
      index: "index.html"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap"
      }, 
      shared: packageJson.dependencies,
    }),
  ]
}

module.exports = merge(commonConfig, devConfig)
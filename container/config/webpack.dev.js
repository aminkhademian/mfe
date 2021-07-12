const { merge } = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require("./webpack.common")
const packageJson = require("../package.json")

const CONTAINER_PORT = 8000

const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${CONTAINER_PORT}/`
  },
  devServer: {
    port: CONTAINER_PORT,
    historyApiFallback: {
        index: "index.html"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        auth: "auth@http://localhost:8002/remoteEntry.js",
        marketing: "marketing@http://localhost:8001/remoteEntry.js",
      },
      shared: packageJson.dependencies
    }),
  ]
}

module.exports = merge(commonConfig, devConfig)
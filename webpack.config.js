module.exports = {
  mode: "development",

  context: `${__dirname}/src`,
  entry: "./index.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  target: ["web", "es5"],
  devtool: "inline-source-map",
  devServer: {
    contentBase: `${__dirname}/static`,
    open: true,
    port: 3000
  }
};

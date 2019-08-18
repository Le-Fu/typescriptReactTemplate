module.exports = {
  entry: "./src/app.tsx",
  output: {
    path: __dirname + "/public",
    filename: "build/app.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.css$/, loader: "typings-for-css-modules-loader?modules" },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "typings-for-css-modules-loader?modules&sass",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      { enforce: "pre", test: /\.js/, loader: "source-map-loader" }
    ]
  }
}

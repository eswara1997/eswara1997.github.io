
module.exports = {
  devtool: "eval-source-map",
  entry:  {
    main: __dirname + "/index.js"
  },
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    contentBase: ".",
    colors: true,
    inline: true,
    historyApiFallback: true,
    port: 3000
  }
};

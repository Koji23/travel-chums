module.exports = {
  entry: './client/src/main.js',
  output: {
    path: './',
    filename: './client/bundle.js'
  },
  devserver: {
    inline: true,
    port: 8080
  },
  devtool: 'source-map',
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
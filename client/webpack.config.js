module.exports = {
  entry: './src/main.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devserver: {
    inline: true,
    port: 8080
  },
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
const path = require('path')

module.exports = {
  entry: './main.js',

  output: {
    path: path.resolve(__dirname),
    filename: 'index.js'
  },

  devServer: {
    inline: true,
    port: 7777
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: path.resolve(__dirname, '../js-type-check-loader.js'),
        options: {
          configFile: '../type-config.js',
          label: 'poop',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
    ]
  }
}

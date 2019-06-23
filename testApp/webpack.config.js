const path = require('path')
const typeConfigFile = require('../type-config.js')

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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: path.resolve(__dirname, '../js-type-check-loader.js'),
        options: {
          configFile: typeConfigFile,
          label: 'poop',
        },
      },
    ]
  }
}

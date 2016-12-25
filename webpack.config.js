var webpack = require('webpack');
var path = require('path');


var BUILD_DIR =   path.resolve(__dirname,'src/client/public');
var APP_DIR = path.resolve(__dirname,'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path:BUILD_DIR,
    filename:'bundle.js'
  },

  //Loader Configuration which converts Jsx to js
  module: {
    loaders:[{
      test:/\.jsx?/,
      include:APP_DIR, //directory to look for the file extension
      loader:'babel',
      query:
      {
        presets:['es2015', 'react']
      }
    }]
  }
};

module.exports = config;

var webpack = require('webpack');

module.exports = {
  entry: {
    app1: './js/App.jsx',
    app2: './js/App2.jsx',
    vendor: ['jquery']
  },
  output: {
    path: './dist',
    filename: '[name]-bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [ 'style', 'css' ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
}

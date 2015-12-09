var webpack = require('webpack');

module.exports = {
  entry: {
    app: './js/App.jsx',
    vendor: ['jquery']
  },
  output: {
    path: './dist',
    filename: 'app-bundle.js',
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

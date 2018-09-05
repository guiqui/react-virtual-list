const path =require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports ={
  //Where to read where to output
  entry:'./src/lib/VirtualList.js',
  output:{
    path:path.resolve('dist'),
    filename:'index.js',
    libraryTarget: 'umd',
    library: 'ReactVirtualList'
  }
  ,
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
       },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: ["url-loader"]
      }
      // ,
      // {
      //   test: /\.json$/,
      //   exclude: /node_modules/,
      //   use: ["json-loader"]
      // }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
          }
        }
      })
    ]
  }
}

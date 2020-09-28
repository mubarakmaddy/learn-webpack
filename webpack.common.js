module.exports = {
  // Single Entrypoints 
  // entry: './src/index.js', 

  // Multiple Entrypoints & Vendor.js
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  module: {
    rules: [
      {
        // used to load images
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        // used to load images
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs'
          }
        }
      },
    ],
  },
};

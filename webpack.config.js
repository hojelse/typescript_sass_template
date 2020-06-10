const path = require('path');

module.exports = {
  entry: './src/index.ts', // entry file webpack will first looks at
  module: {
    rules: [
      {
        test: /\.ts$/,      // if file end with .ts
        use: 'ts-loader',   // use ts loader to compile
        include: [          // specify src location
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  output: {
    publicPath: 'public',    // relative path
    filename: 'script.js',   // bundle file name
    path: path.resolve(__dirname, 'public'), // creates an absolute path
  }
}
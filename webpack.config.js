const path = require('path')

const baseConfig = {
  entry: './src/data-model.ts',
  devtool: 'inline-source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'data-model',
    libraryTarget: 'umd'
  }
}

module.exports = [
  { ...baseConfig, target: 'node' },
  { ...baseConfig, target: 'web' }
]

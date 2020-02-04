const path = require('path')


const createConfig = ({
    libraryTarget,
    target
}) => {
    return {
        entry: './src/data-model.ts',
        devtool: 'inline-source-map',
        mode: 'production',
        target,
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
          libraryTarget
        }
      }
}

module.exports = [
    createConfig({libraryTarget: "umd", target: "web"}),
    createConfig({libraryTarget: "umd", target: "node"})
]

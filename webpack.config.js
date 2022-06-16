module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'index.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
    symlinks: false,
    cacheWithContext: false,
  },
};

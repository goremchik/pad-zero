module.exports = {
  entry: './src/main.ts',
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
  output: 'index.js',
};

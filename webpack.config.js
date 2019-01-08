const { resolve } = require('path');

module.exports = function config({ __dirname }) {
  return {
    entry: './src/index',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: resolve(__dirname, 'src'),
          exclude: resolve(__dirname, '..', 'node_modules'),
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', {
            loader: 'css-loader',
            query: {
              import: false,
              importLoaders: 1,
              localIdentName: '[local]',
              modules: true,
              sourceMap: true,
            },
          }],
        },
        {
          test: /\.(svg$|png)/,
          loader: 'file-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules'],
    },
    devtool: 'cheap-module-source-map',
    target: 'web',
    externals: {
      react: 'commonjs react',
      'prop-types': 'commonjs prop-types',
    },
    stats: 'errors-only',
  };
};

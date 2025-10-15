const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash:8].js' : '[name].js',
      chunkFilename: isProduction ? '[name].[contenthash:8].chunk.js' : '[name].chunk.js',
      publicPath: '/',
      clean: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                getCustomTransformers: () => ({
                  before: isDevelopment ? [require('react-refresh-typescript')()].filter(Boolean) : [],
                }),
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      isDevelopment && new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
      isProduction && new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
      }),
    ].filter(Boolean),
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: /node_modules/,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      port: 8080,
      host: '0.0.0.0',
      hot: true,
      liveReload: false,
      open: false,
      historyApiFallback: true,
      allowedHosts: 'all',
      client: {
        webSocketURL: 'auto://0.0.0.0:0/ws',
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      watchFiles: {
        paths: ['src/**/*', 'public/**/*'],
        options: {
          usePolling: true,
          interval: 1000,
        },
      },
    },
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'eval-source-map',
  };
};
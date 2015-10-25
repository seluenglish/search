import webpack from 'webpack';
import IsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import isomorphicConfig from '~/src/config/isomorphic.config';
import webpackConfig from './webpack.config';

export default {
  ...webpackConfig,
  devtool: null,
  plugins: [
    new IsomorphicToolsPlugin(isomorphicConfig),
    ...webpackConfig.plugins,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [{
        test: /module\.s?css$/,
        include: [/src\/app/],
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&localIdentName=[path][name]-[local]' +
          '!sass?outputStyle=compressed',
        )
      }, {
        test: /\.s?css$/,
        include: [/src\/app/],
        exclude: /module\.s?css$/,
        loader: ExtractTextPlugin.extract(
          'style', 'css!sass?outputStyle=compressed'
        )
      }, {
        test: /\.es6$/,
        include: [/src\/app/],
        loader: 'babel',
        query: {
          stage: 0,
          optional: ["runtime"],
          "plugins": [
            "babel-root-import"
          ]
        }
      },
      ...webpackConfig.module.loaders,
    ]
  }
}

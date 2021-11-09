/**
 * This config is for a serving a production build. It includes loaders for css, most js extensions, fonts and images.
 * 
 * The server launches to 0.0.0.0:3000 in the browser
 * 
 * required install scripts => 
 * npm i path
 * `npm i -D webpack webpack-cli babel-loader @babel-preset/env @babel-preset/env babel-plugin-styled-components mini-css-extract-plugin html-webpack-plugin terser-webpack-plugin`
 * 
 * see examples for more detail
 */

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            extractComments: false,
            terserOptions: {
              format: {
                comments: false,
              },
            },
          }),
        ],
    },
});
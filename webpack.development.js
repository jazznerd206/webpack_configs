/**
 * This config is for a hot reloading dev server. It includes loaders for css, most js extensions, fonts and images.
 * 
 * The server launches to 0.0.0.0:3000 in the browser
 * 
 * required install scripts => 
 * npm i path
 * npm i -D webpack webpack-cli webpack-dev-server css-loader babel-loader @babel/preset-env @babel/preset-react babel-plugin-styled-components mini-css-extract-plugin html-webpack-plugin
 * 
 * see examples for more detail
 */

const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        hot: true,
        open: true,
        static: path.resolve(__dirname, 'dist'),
        // if bundling front end, add server proxy config here
        proxy: {
        },
    },
});
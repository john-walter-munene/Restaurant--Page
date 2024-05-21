const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        loader: './src/loader.js',
        menu: './src/menu.js',
        contacts: './src/contacts.js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: "index.html",
            title: "Restaurant",
            inject: 'body',
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
};
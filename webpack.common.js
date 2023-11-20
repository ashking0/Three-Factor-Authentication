const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer"),
            "crypto": require.resolve("crypto-browserify")
        } 
      },
    entry: './src/js/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader",//2. Turn css into commonjs
                    "sass-loader"//1. Turn sass into css
                ]
            },
            {
                test: /\.html$/,
                use: [
                    "html-loader"
                ]
            },
            {
                test: /\.png$/,
                use: {
                  loader: 'url-loader',
                },
            },
            {
                test: /\.png$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]",
                    }
                }
            },
        ]
    }
};
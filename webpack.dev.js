const path = require('path');
const common = require("./webpack.common")
const { merge } = require("webpack-merge")

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "js/index.js",
        path: path.resolve(__dirname, 'dist')
    }
});
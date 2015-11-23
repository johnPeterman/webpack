var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        "styles": "./src/entry.js",
        "javascript": "./src/entry2.js"
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        path: __dirname + "/public/dist/js",
        publicPath: "/public/dist/js/"
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    },
    plugins: [
        new ExtractTextPlugin("../css/main.css", {
            disable: false,
            allChunks: true
        }),
    ]
};
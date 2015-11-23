var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        a: "./src/entry.js",
        b: "./src/entry2.js"
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        path: __dirname + "/public/dist",
        publicPath: "/public/dist/"
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
        new ExtractTextPlugin("css/[name].css", {
            disable: false,
            allChunks: true
        }),
    ]
};
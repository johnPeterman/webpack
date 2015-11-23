var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname,
        filename: "/public/dist/js/output.js"
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
        new ExtractTextPlugin("public/dist/css/styles.css", {
            disable: false,
            allChunks: true
        })
    ]
};
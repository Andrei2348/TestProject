const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    entry: "./src/scripts/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./src/index.html"
            }
        )
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            // {
            //     test: /\.scss$/,
            //     use: ExtractTextPlugin.extract({
            //         llback: 'style-loader',
            //         use: ['css-loader', 'sass-loader']
            //     })
            // }
        ]
    },

    // plugins: [
    //     new ExtractTextPlugin('style.css')
    // ]
};
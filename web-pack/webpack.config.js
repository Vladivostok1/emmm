const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    mode: "development",//productions
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ {                     
                            loader:"css-loader",
                            options: { importLoaders: 1 }
                        }, 'postcss-loader'
                    ]
                })
            },
            {
                test:/\.(jpg|png|gif)/,
                use:[
                    {
                        loader:"url-loader",
                        options: {
                            limit: 500,
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(htm|html)$/i,
                loader: ["html-withimg-loader"]
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true //可选可不选
            },
            hash: true,//可选可不选
            template: './src/index.html',
        }),
        new ExtractTextPlugin("index.css"),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
    },
}
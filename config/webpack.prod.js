const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin")


module.exports = {
    mode: "production",
    entry: {
        path: path.resolve(__dirname, '../src')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js',
        // publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: false,
                        },
                    },
                    // Creates `style` nodes from JS strings
                    // "style-loader",
                    // Translates CSS into CommonJS
                    // "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'media/[hash][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[hash][ext][query]'
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/index.html'),
                title: "CREACEPT",
                filename: 'index.html',
                favicon: './src/static/favicon.png',
            }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new MiniCssExtractPlugin({
            filename: "style/[name].css",
        }),
    ],

}
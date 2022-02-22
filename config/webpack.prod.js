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
    // devServer: {
    //     hot: true,
    //     open: true,
    //     static: {
    //         watch: true,
    //         directory: '../src'
    //     }
    // },
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/template.html'),
                filename: 'index.html',
                favicon: './src/static/favicon.ico',
            }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new MiniCssExtractPlugin({
            filename: "style/[name].css",
        }),
    ],

}
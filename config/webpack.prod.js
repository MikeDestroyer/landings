const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin")


module.exports = {
    mode: "production",
    entry: {
        path: path.resolve(__dirname, '../src')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        // path: 'C:\\inetpub\\creacept',
        filename: 'js/[name].js',
        clean: true,
        // publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/i,
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
                test: /\.(jpe?g|png|gif|svg|webm|webp)$/i,
                type: "asset/resource",
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
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            `...`,
            new CssMinimizerPlugin(),

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/index.html'),
                title: "CREACEPT",
                filename: 'index.html',
                favicon: './src/static/favicon.ico',
            }),
        new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/thankyou.html'),
                title: "Страница благодарности — CREACEPT",
                filename: 'thankyou.html',
                favicon: './src/static/favicon.ico',
            }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true,
        }),
        new MiniCssExtractPlugin({
            filename: "style/[name].css",
        }),
    ],

}
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        path: path.resolve(__dirname, '../src')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js',
        publicPath: "/",
    },
    devServer: {
            open: true,
        static:{
            directory: path.join(__dirname, '../src'),
            watch: true,
        },
        hot: true,
        compress: true,
        port: 9000,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4|webp|webm)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/inline",
            },
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
        }
    )],

}
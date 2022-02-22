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
        hot: true,
        open: true,
        static:{
            watch: true,
            directory: '../src'
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
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
        },

    )],

}
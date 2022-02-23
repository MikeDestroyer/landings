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
            {
                test: /\.png/,
                type: 'asset/resource'
            },

            // {
            //     test: /\.(png|svg|jpg|jpeg|gif|webp|mp4)$/i,
            //     type: "asset/resource",
            //     generator: {
            //         filename: (pathData) => {
            //             return pathData.filename.substr(4)
            //         },
            //     },
            //     use: [
            //         {
            //             loader: "image-webpack-loader",
            //             options: {
            //                 mozjpeg: {
            //                     progressive: true,
            //                     quality: 70,
            //                 },
            //                 pngquant: {
            //                     quality: [0.6, 0.9],
            //                     speed: 1,
            //                 },
            //                 svgo: {
            //                     removeTitle: true,
            //                     convertColors: true,
            //                     convertPathData: false,
            //                 },
            //                 gifsicle: {
            //                     interlaced: false,
            //                 },
            //             },
            //         },
            //     ],
            // },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
            title: "CREACEPT",
            filename: 'index.html',
        favicon: './src/static/favicon.ico',
        },

    )],

}
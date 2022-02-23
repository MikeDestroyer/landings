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
            //     test: /\.(gif|png|jpe?g|svg)$/i,
            //     use: [
            //         'file-loader',
            //         {
            //             loader: 'image-webpack-loader',
            //             options: {
            //                 name: 'dirname/[contenthash].[ext]',
            //                 mozjpeg: {
            //                     progressive: true,
            //                 },
            //                 // optipng.enabled: false will disable optipng
            //                 optipng: {
            //                     enabled: false,
            //                 },
            //                 pngquant: {
            //                     quality: [0.65, 0.90],
            //                     speed: 4
            //                 },
            //                 gifsicle: {
            //                     interlaced: false,
            //                 },
            //                 // the webp option will enable WEBP
            //                 webp: {
            //                     quality: 75
            //                 }
            //             }
            //         },
            //     ],
            // }
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader'
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
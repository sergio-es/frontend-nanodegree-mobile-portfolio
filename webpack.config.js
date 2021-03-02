const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        perfmatters: './src/critical-main/index.js',
        style: './css/style.css',
        print: './css/print.css',
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader"]
            }
        ]
    }, 

    optimization: {
        minimize:true,
        minimizer: [ 
            '...',
            new CssMinimizerPlugin(),
            
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].css"}),
    ]
}
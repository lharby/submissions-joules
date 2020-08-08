const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
        publicPath: '/',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css',
            allChunks: true
        }),
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'public/index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            }
        ]
    },
    target: 'web',
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    watch: true,
    mode: 'development'
};

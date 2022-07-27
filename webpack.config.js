const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        bundle: path.resolve(__dirname, 'src/client/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource'

            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Preventative Health Care',
            template: 'src/client/index.html'
            // relative to current path
        }),
        new BundleAnalyzerPlugin(),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build')
        },
        port: 8000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        proxy: { '/': 'http://localhost:3000' }
    },
}
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new WorkboxPlugin.GenerateSW()
    ]
}

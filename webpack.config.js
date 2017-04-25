var path = require('path');
var webpack = require('webpack');
var PROD = 0; // 0 - 'bundle.js' ,  1 - 'bundle.min.js'

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/app/main.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: PROD ? 'bundle.min.js' : 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ] : []
};
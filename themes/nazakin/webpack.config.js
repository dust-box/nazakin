const path = require('path');
const webpack = require('webpack');
const NotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        'main': `./js/main.js`,
    },
    output: {
        path: path.resolve(__dirname, 'static/js'),
        filename: '[name].js',
        publicPath: '..',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    publicPath: './css',
                    fallback: [
                        'style-loader',
                    ],
                    use: [
                        { loader: 'css-loader', },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => {
                                    require('autoprefixer')('android 4', 'android 4.4', 'last 3 versions', 'iOS 8');
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                outputStyle: 'expanded',
                            },
                        },
                    ],
                }),
            },
        ],
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src/js'),
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '../css/style.css',
            allChunks: true,
            disable: false,
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
            options: {
                context: path.resolve(__dirname, 'src'),
            },
        }),
        new NotifierPlugin(),
    ],
};
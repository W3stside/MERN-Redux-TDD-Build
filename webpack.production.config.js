'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    devtool: 'source-map', //cheap eval does NOT work in prod
    // The entry file. All your app roots from here.
    entry: [
        // Polyfills go here too, like babel-polyfill or whatwg-fetch
        'babel-polyfill',
        path.join(__dirname, 'app/index.js')
    ],
    // Where you want the output to go
    output: {
        path: path.join(__dirname, '/static/'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    plugins: [
        // webpack gives your modules and chunks ids to identify them. Webpack can vary the
        // distribution of the ids to get the smallest id length for often used ids with
        // this plugin
        new webpack.optimize.OccurenceOrderPlugin(),

        // extracts the css from the js files and puts them on a separate .css file. this is for
        // performance and is used in prod environments. Styles load faster on their own .css
        // file as they dont have to wait for the JS to load.
        new ExtractTextPlugin('[name]-[hash].min.css'),
        // handles uglifying js
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        // creates a stats.json
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        // plugin for passing in data to the js, like what NODE_ENV we are in.
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'PROD_MONGODB_URI': JSON.stringify(process.env.PROD_MONGODB_URI)
            }
        })
    ],

    // ESLint options
    eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: true
    },

    module: {
        // Runs before loaders
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint'
            }
        ],
        // loaders handle the assets, like transforming sass to css or jsx to js.
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.json?$/,
            loader: 'json'
        }, {
            test: /\.scss$/,
            // we extract the styles into their own .css file instead of having
            // them inside the js.
            loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass')
        },
        // allows loading in local files via require() in front end
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {loader: 'url-loader?limit=8192'}
            ]
        },
        {
            test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
            loader: 'file'
        }]
    },
    postcss: [
        require('autoprefixer')
    ]
};

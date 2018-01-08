const CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const CleanWebpackPlugin = require('clean-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: {
        vendor: ["react", "react-dom", "react-router-dom", "axios", "antd"],
        index: SRC_DIR + "/app/index.js"
    },
    output: {
        path: DIST_DIR + "/app",
        filename: '[name].bundle.js',
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader','css-loader','less-loader','font-loader'],
                exclude: '/node_modules/'
            },
            {
                test: /\.less$/,
                loader: ['style-loader','css-loader','less-loader'],
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                loader: ['style-loader','css-loader','postcss-loader','sass-loader'],
                exclude: '/node_modules/'
            }
        ]
    },
    // plugins: [
    //     new CopyWebpackPlugin([

    //         { from: 'src/index.html', to: 'dist/index.html' },

    //         // {output}/to/directory/file.txt
    //         // { from: 'from/file.txt', to: 'to/directory' },

    //         // Copy directory contents to {output}/to/directory/
    //         // { from: '../../app/img', to: '../../app/img' },
    //     ]),
    // ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
          name: ['vendor']
        })
      ]
};

module.exports = config;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');


module.exports = {
    mode: "development", // enabled useful tools for development
    devtool:'cheap-module-eval-source-map',
    entry: ["./src/client/index.js"],
    output: {
        filename:'index.js',
        path:path.resolve(__dirname,'../build')
    },
    module: {// 关于模块配置
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/, 
                loader: 'babel-loader',
                options:{
                  "presets": ["@babel/preset-env"]
                },
                exclude: [
                    path.join(__dirname, '../node_modules')  // 由于node_modules都是编译过的文件，这里我们不让babel去处理其下面的js文件
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [{
                  loader: MiniCssExtractPlugin.loader,
                },
                {
                  loader: 'css-loader',
                  options:{
                    importLoaders: 2
                  }
                },
                'sass-loader'
                ],
              },
              {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              }
          ]
    },
    plugins: [
        new HtmlWebpackPlugin({template:'index.html'}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development", // enabled useful tools for development
    entry: ["./index.js"],
    output: {
        // webpack 如何输出结果的相关选项
        path: path.resolve(__dirname, "../build"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: "bundle.js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
    },
    module: {// 关于模块配置
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
          ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ],
}

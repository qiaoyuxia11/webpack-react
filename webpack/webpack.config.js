const path = require('path');
module.exports = {
    mode: "development", // enabled useful tools for development
    entry: ["./index.js"],
    output: {
        // webpack 如何输出结果的相关选项
        path: path.resolve(__dirname, "dist"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: "bundle.js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
        publicPath: "/assets/", // string    // 输出解析文件的目录，url 相对于 HTML 页面
        library: "MyLibrary", // string,
        // 导出库(exported library)的名称
        libraryTarget: "umd", // 通用模块定义    // 导出库(exported library)的类型
        /* 高级输出配置（点击显示） */  
    },
    module: {
        // 关于模块配置
    },
    plugins: [
        // ...
    ],
}

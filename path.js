// 文件路径和目录路径操作工具类
const path = require('path')

// 目录路径
console.log(path.dirname('/app/test.log'))
// 文件名称
console.log(path.basename('/app/test.log'))
// 后缀类型
console.log(path.extname('/app/test.log'))
// 绝对路径
console.log(path.resolve(__dirname, 'index.js'));
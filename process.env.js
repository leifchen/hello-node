// 输出环境变量
console.log(process.env)

if (process.env.dev) {
  console.log('开发环境')
} else {
  console.log('生产环境')
}

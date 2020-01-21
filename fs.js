// 文件读写操作工具类
let fs = require('fs')

// 异步读操作
fs.readFile('./package.json', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log(data.toString())
  }
})

// 异步写操作
fs.writeFile('test.log', 'hello fs', err => {
  if (err) {
    console.error(err)
  }
})

// 同步读操作
const data = fs.readFileSync('./package.json')
console.log(data.toString())

// 同步写操作
fs.writeFileSync('testSync.log', 'hello fs sync')
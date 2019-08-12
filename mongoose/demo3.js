let Am = require('./model/article')

// new Am({
//   title:'我是文章标题111',
//   content:'我是内容哈哈哈哈哈哈哈',
//   author:'cjy'
// }).save()

Am.find({},function (err,res) {
  console.log(res)
})
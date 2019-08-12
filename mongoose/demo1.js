/***
 *
 * mongoose的简单使用
 * 对数据进行增删改查
 */

// 1. 引入mongoose
const mongoose = require('mongoose')

// 2. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/lewis', {useNewUrlParser: true}, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('数据库连接成功')
})

// 3. 定义Schema
const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  gender: String
})

// 4. 定义模型 第三个参数代表lewis数据库中的user表
// const User = mongoose.model('User', UserSchema)  // 默认会操作users表
const User = mongoose.model('User', UserSchema, 'user') // 会操作user表

// 5. 查询user表中的数据
// User.find({name: 'cjy'}, function (err, res) {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(res) // 返回值是一个数组
// })


// 6. 增加数据
// 通过实例化model来增加数据
// const u = new User({
//   name: '张玉亭',
//   age: 28,
//   gender: 'male'
// })

// 执行 save中的回调函数是可选的
// u.save(function (err) {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('add success')
// })


// 7. 修改数据
// User.updateOne(
//   {'_id': '5d510ebab41c13156c8dc434'},
//   {name: '张玉亭111'},
//   function (err, res) {
//     if (err) {
//       return console.log(err)
//     }
//     console.log(res) // { n: 1, nModified: 1, ok: 1 }
//   }
// )

// 8. 删除数据
// User.deleteOne({
//   "_id":"5d510dc09a77ca2350845cc2"
// },function (err,res) {
//   if(err){
//     return console.log(err)
//   }
//   console.log(res)
// })


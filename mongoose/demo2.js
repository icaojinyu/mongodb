/**
 *
 * mongoose默认参数，模块化，性能问题
 *
 */

// 默认参数：增加数据的时候，如果不传入数据，会使用默认配置的数据

const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://127.0.0.1:27017/lewis',
  {useNewUrlParser: true},
  function (err) {
    if (err) return console.log(err)
    console.log('数据库连接成功')
  }
)

// 定义表的映射
// 字段名称必须和数据库中的表 保持一致
const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  gender: {
    type:String,
    default:'男' // 给gender字段指定默认值
  }
})

// 定义模型
const User = mongoose.model('User', UserSchema, 'user')


// User.find({}, function (err, res) {
//   if (err) return console.log(err)
//   console.log(res)
// })

new User({
  name:'张三',
  age:40
}).save()
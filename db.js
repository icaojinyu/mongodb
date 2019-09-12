// 引入mongoose模块
const mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})

// 创建模型
const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number,
    default: 17
  },
  email: {
    type: String
  },
  time: {
    type: String,
    default: Date.now()
  }
}))


/**
 * 增 model.create(obj|arr)
 * 增加一个：传递一个对象即可
 * 增加多个：传递一个数组，里面包含多个对象
 *
 *
 * 删
 * model.deleteOne(condition)
 * model.deleteMany(condition)
 *
 * 改
 * model.updateOne(condition,{key:value,...})
 * model.updateMany(condition,{key:value,...})
 *
 * 查
 * model.find(condition)
 * model.findOne(condition)
 *
 * 搜索：用正则表达式进行模糊查询 model.find({name:/^cjy/})
 * 分页：model.find(condition).skip(m).limit(n)
 * 排序：model.find(condition).sort({_id:-1}) 1 代表正序 -1 代表倒序
 *
 */

async function fn() {
  // 新增一条记录
  // let data = await User.create({
  //   name:'sdd',
  //   age:16
  // })
  // console.log(data)

  // 新增多条记录
  // let data = await User.create([
  //   {
  //     name: '张三',
  //     age: 24
  //   },
  //   {
  //     name:'李四',
  //     age:30
  //   }
  // ])
  // console.log(data)


  // -------------------------------


  // 删除一条记录
  // let data = await User.deleteOne({
  //   age:{
  //     $gte:26
  //   }
  // })
  // console.log(data)

  // 删除多条记录
  // let data = await User.deleteMany({
  //   age: {
  //     $in: [16, 24]
  //   }
  // })
  // console.log(data)


  // -------------------------------


  // 修改一条记录
  // let data = await User.updateOne({
  //   name: 'cjy'
  // }, {
  //   $set: {
  //     name: 'cjy666',
  //     age: 16
  //   }
  // })
  // console.log(data)

  // 修改多条记录
  // let data = await User.updateMany({
  //   age: 16
  // }, {
  //   $set: {
  //     age: 17
  //   }
  // })
  // console.log(data)


  // -------------------------------


  // 查询表中的所有记录
  // let data = await User.find()
  // console.log(data)

  // 查询符合条件的第一条记录
  // let data = await User.findOne({
  //   age: 17
  // })
  // console.log(data)

  // 条件查询，查询age大于等于16，小于等于24 的所有记录
  // 只包含name,age字段，去掉默认的_id字段
  // let data = await User.find({
  //   age: {
  //     $gte: 16,
  //     $lte: 24
  //   }
  // }, {
  //   name: 1,
  //   age: 1,
  //   _id:0
  // })
  // console.log(data)

  // 条件查询，查询age为17、30的所有记录
  // 只包含name,age字段，去掉默认的_id字段
  // let data = await User.find({
  //   age: {
  //     $in: [17, 30]
  //   }
  // }, {
  //   name: 1,
  //   age: 1,
  //   _id: 0
  // })
  // console.log(data)

  // 条件查询，查询 name 为 张三 或者 age 为 17 的所有记录
  // 只包含name,age字段，去掉默认的_id字段
  // let data = await User.find({
  //   $or: [
  //     {name: '张三'},
  //     {age: 17}
  //   ]
  // }, {
  //   name: 1,
  //   age: 1,
  //   _id: 0
  // })
  // console.log(data)

}

fn()

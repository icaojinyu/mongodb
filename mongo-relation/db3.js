const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mongo-relation', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const CategorySchema = new mongoose.Schema({
  name: {type: String}
}, {
  toJSON: {virtual: true}
})

// 虚拟字段
CategorySchema.virtual('posts', {
  // 字段之间的关联
  localField: '_id', // 本地字段_id
  ref: 'Post',// 参考的模型
  foreignField: 'categories', // 外键 这里是Post模型中的categories字段
  justOne: false // 不是单条 返回的是一个数组
})

const Category = mongoose.model('Category', CategorySchema)

const Post = mongoose.model('Post', new mongoose.Schema({
  title: {type: String},
  content: {type: String},
  categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}]
}))

async function main() {
  // await Category.create([
  //   {name: 'nodejs'},
  //   {name: 'vuejs'}
  // ])
  // console.log(await Category.find())
  //
  // await Post.create([
  //   {title: '我的第1篇博客', content: '内容1'},
  //   {title: '我的第2篇博客', content: '内容2'}
  // ])
  // console.log(await Post.find())

  // lean方法表示输出纯粹的json数据
  const cats = await Category.find().populate('posts').lean()
  console.log(cats)
}

main()
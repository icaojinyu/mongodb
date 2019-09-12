const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mongo-relation', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const Category = mongoose.model('Category', new mongoose.Schema({
  name: {type: String}
}))

const Post = mongoose.model('Post', new mongoose.Schema({
  title: {type: String},
  content: {type: String},
  category: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
}))

async function main() {
  // await Category.create([
  //   {name: 'nodejs'},
  //   {name: 'vuejs'}
  // ])
  // console.log(await Category.find())
  //
  // await Post.create([
  //   {title: '我的第1篇帖子', content: '内容1'},
  //   {title: '我的第2篇帖子', content: '内容2'}
  // ])
  // console.log(await Post.find())

  const cat1 = await Category.findOne({
    name:'nodejs'
  })
  const cat2 = await Category.findOne({
    name:'vuejs'
  })

  const post1 = await Post.findOne({
    title: '我的第1篇帖子'
  })
  const post2 = await Post.findOne({
    title: '我的第2篇帖子'
  })

  post1.category = cat1
  post2.category = cat2

  await post1.save()
  await post2.save()

  const posts = await Post.find().populate('category')
  console.log(posts)
}

main()
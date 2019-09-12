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

  const cat1 = await Category.findOne({
    name: 'nodejs'
  })
  const cat2 = await Category.findOne({
    name: 'vuejs'
  })

  const post1 = await Post.findOne({
    title: '我的第1篇博客'
  })
  const post2 = await Post.findOne({
    title: '我的第2篇博客'
  })

  post1.categories = [cat1]
  post2.categories = [cat1, cat2]

  await post1.save()
  await post2.save()

  const posts = await Post.find().populate('categories')
  console.log(posts)
  console.log(posts[0])
  console.log(posts[1])
}

main()
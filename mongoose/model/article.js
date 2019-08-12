let mongoose = require('./db')

let schema = mongoose.Schema({
  title: String,
  author: String,
  content: String
})

module.exports = mongoose.model('Article', schema, 'article')
let mongoose = require('./db')

let schema = mongoose.Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    default: '男'
  }
})

module.exports = mongoose.model('User', schema, 'user')
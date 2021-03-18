const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const schema = new mongoose.Schema({
  name: String,
  icon: String
})

module.exports = mongoose.model('Item',schema)
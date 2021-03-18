const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const schema = new mongoose.Schema({
  name: String,
  items: [{
    image: String,
    url: String
  }]
})

module.exports = mongoose.model('Ad',schema)
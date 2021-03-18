const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const schema = new mongoose.Schema({
  title: String,
  body: String,
  categories: [{type:mongoose.SchemaTypes.ObjectId, ref: 'Category'}]
},{
  timestamps: true
})

module.exports = mongoose.model('Article',schema,)
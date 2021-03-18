const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const schema = new mongoose.Schema({
  name: String,
  parent: mongoose.Schema.Types.ObjectId
})

schema.virtual('children',{
  localField: '_id',
  foreignField: 'parent',
  justOne: false,
  ref: 'Category'
})

schema.virtual('newsList',{ //定义虚拟字段
  localField: '_id',  //内键，schema对应的模型title的_id
  foreignField: 'categories', //外键，关联模型option的title字段
  justOne: false, //只查询一条数据
  ref: 'Article'  //关联的模型
})

module.exports = mongoose.model('Category',schema)
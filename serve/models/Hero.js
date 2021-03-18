const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const schema = new mongoose.Schema({
  name: String,
  avatar: String,
  banner: String,
  title: String,
  categories: [{type:mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
  scores:{
    difficult: Number,
    skill: Number,
    attack: Number,
    survive: Number
  },
  skills: [{
    icon: String,
    name: String,
    delay: String,
    cost: String,
    description: String,
    tips: String
  }],
  items1: [{type: mongoose.SchemaTypes.ObjectId,ref: 'Item'}],
  items2: [{type: mongoose.SchemaTypes.ObjectId,ref: 'Item'}],
  usageTips: String,
  battleTips: String,
  teamTips: String,
  partners: [{
    hero: {type: mongoose.SchemaTypes.ObjectId, ref: 'Hero'},
    description: String
  }],

})
// 存放再数据库中的schema表名称是默认的，
// 一般为小写加复数，但Hero可能会变成heros，所以要指定表的名称为heroes
module.exports = mongoose.model('Hero',schema,'heroes')
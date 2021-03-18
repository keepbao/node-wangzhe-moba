const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const schema = new mongoose.Schema({
  username: String,
  password: {
    type: String,
    select: false,
    set(val){
      return require('bcrypt').hashSync(val,10)
    }
  }
})

module.exports = mongoose.model('AdminUser',schema)
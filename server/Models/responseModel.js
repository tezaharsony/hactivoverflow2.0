var mongoose = require ('mongoose')
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/hacktivoverflow')

const responseSchema = new Schema ({
  rescontent : String,
  title: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref:'user'
  },
  thread: {
    type: Schema.Types.ObjectId,
    ref:'data'
  }
})


var response = mongoose.model('response',responseSchema)

module.exports = response;

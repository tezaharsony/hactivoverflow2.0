var mongoose = require ('mongoose')
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/hacktivoverflow')

const dataSchema = new Schema ({
  title: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref:'user'
  },
  replies: [{
    type: Schema.Types.ObjectId,
    ref: 'response'
  }],
  thread: String
  });




var data = mongoose.model('data',dataSchema)

module.exports = data;

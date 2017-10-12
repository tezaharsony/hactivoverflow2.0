var Response =  require('../Models/responseModel')
var jwt = require ('jsonwebtoken')

var createRes = function(req, res) {
  // console.log('params ===', req.params);
  var bongkaranToken = jwt.verify(req.headers.token, "kantal")
  // console.log(bongkaranToken);
  let newResponse = new Response({
    title: req.body.title,
    rescontent: req.body.rescontent,
    user_id: bongkaranToken.id,
    thread: req.body.threadId,
    createdAt: new Date()
  })
  newResponse.save((err, createdResponse) => {
    if(err) {
      res.send(err)
    } else {
      res.send(createdResponse)
    }
  })
}

var getAll = function(req, res) {
  Response.find({})
  .populate({path:'user_id', model:'user'})
  .exec(function (err, responses) {
    res.send(err ? err : responses)
  })
}

var findResponseById = function(req, res) {
  Response.find({user_id: req.headers.authentic.id})
  .populate({path:'user_id', model:'user'})
  .exec(function (err, responses) {
    res.send(err ? err : responses)
  })
}

var findAnswerByThread = function(req, res) {
  Response.find({thread: req.params.threadId})
  .populate({path:'thread'})
  .exec(function (err, response) {
    res.send(err ? err : response)
  })
}

var deleteResponse = function (req,res) {
  Response.deleteOne({_id: req.params.id})
  .then(function (err,response){
    res.send(err ? err : response)
  })
}

module.exports = {createRes,getAll,findResponseById,findAnswerByThread,deleteResponse};

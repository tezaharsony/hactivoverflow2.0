var Thread = require('../Models/dataModel');
var Response = require('../Models/responseModel')

var create = function(req, res) {
  let newThread = new Thread({
    title: req.body.title,
    thread: req.body.thread,
    createdAt: new Date(),
    user_id: req.headers.authentic.id
  })
  newThread.save((err, createdThread) => {
    if(err) {
      res.send(err)
    } else {
      res.send(createdThread)
    }
  })
}

// var findthread = function (req,res){
//   Thread.find({}, function(err,thread){
//     if(!err) {
//       res.send(thread)
//     } else {
//       res.send(err)
//     }
//   });
// }

var findthread = function(req, res) {
  Thread.find({})
  .populate({path:'user_id', model:'user'})
  .exec(function (err, responses) {
    res.send(err ? err : responses)
  })
}

// var findthreadById = function (req,res){
//   Thread.find({user_id: req.headers.authentic.id}, function(err,thread){
//     if(!err) {
//       res.send(thread)
//     } else {
//       res.send(err)
//     }
//   });
// }

var findthreadById = function(req, res) {
  Thread.find({user_id: req.headers.authentic.id})
  .populate({path:'user_id', model:'user'})
  .exec(function (err, responses) {
    res.send(err ? err : responses)
  })
}

var findOneThread = function (req, res) {
  Thread.findOne({_id:req.params.id})
  .populate({path:'user_id', model:'user'})
  .exec(function (err, responses) {
    res.send(err ? err : responses)
  })
}


var findSpecificThread = function(req, res) {
  Thread.findOne({_id: req.params.id})
  .populate({path:'user_id', model:'user'})
  .exec(function (err, responses) {
    // console.log(responses);
    Response.find({thread: responses._id})
    .populate('thread')
    .populate('user_id')
    .exec(function (err, result) {
      console.log('iniii resul =====>',result);
      responses.answer = result
      res.send(err ? err : result)
    })
    // res.send(err ? err : responses)
  })
}

var deleteData = function (req,res) {
  Thread.deleteOne({_id: req.params.id})
  .then(function (err,response){
    res.send(err ? err : response)
  })
}


module.exports = { create,findthread,findthreadById,findSpecificThread,findOneThread,deleteData};

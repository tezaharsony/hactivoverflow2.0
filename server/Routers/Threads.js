
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const threadCont = require('../Controllers/dataController');
const resCont = require('../Controllers/responseController')


const auth = (req, res, next) =>
{
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token, "kantal");
    {
      req.headers.authentic = decoded
      next()
    }
  }
  else {
    res.send('you should login')
  }
}

router.post('/', auth, threadCont.create)
router.get('/', auth, threadCont.findthread)
router.get('/:id/thread', auth, threadCont.findOneThread)
router.get('/reply', auth, resCont.getAll)
router.post('/reply/:id', auth, resCont.createRes)
router.get('/reply/:id', auth, resCont.findResponseById)
router.get('/:id', auth, threadCont.findSpecificThread)
router.get('/:threadId/answers', auth, resCont.findAnswerByThread)
router.delete('/:id/delres', auth, resCont.deleteResponse)
router.delete('/:id/delthr', auth, threadCont.deleteData)

module.exports = router

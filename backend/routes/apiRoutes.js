const express = require('express')
const router = express.Router()
const wrap = (fn) => (req, res, next) => fn(req, res, next).catch(next)
const f = require('../utils/getQuiz')

router.get(
  '/index',
  wrap(async (req, res) => {
    res.send(await f.fetchQuizData())
  })
)

module.exports = router

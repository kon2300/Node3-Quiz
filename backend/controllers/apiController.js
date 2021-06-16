const f = require('../models/getQuiz')
const wrap = (fn) => (req, res, next) => fn(req, res, next).catch(next)

module.exports = {
  getQuizData: wrap(async (req, res) => {
    res.send(await f.fetchQuizData())
  }),
}

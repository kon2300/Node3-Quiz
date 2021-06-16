const express = require('express')
const router = express.Router()
const apiControllers = require('../controllers/apiController')

router.get('/index', apiControllers.getQuizData)

module.exports = router

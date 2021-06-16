const express = require('express')
const router = express.Router()

router.use('/', require('./homeRoutes'))
router.use('/api', require('./apiRoutes'))

module.exports = router

var express = require('express')
var router = express.Router()

const moviesCtrl = require('../controllers/movies')

router.get('/new', moviesCtrl.new)
router.post('/', moviesCtrl.create)
router.get('/', moviesCtrl.index)

module.exports = router

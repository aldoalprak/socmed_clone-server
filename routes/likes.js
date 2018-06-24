const express = require('express')
const router = express.Router()
const Like = require('../controllers/likes_controller.js')

router.post("/add", Like.add)



module.exports = router
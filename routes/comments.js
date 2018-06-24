const express = require('express')
const router = express.Router()
const Comment = require('../controllers/comments_controller.js')

router.post("/add", Comment.add)
router.get("/showAll", Comment.showAll)
router.get("/show", Comment.show)



module.exports = router
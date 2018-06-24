const express = require ("express")
const router = express.Router()
const Post = require("../controllers/posts_controller.js")

router.post("/add",Post.add)
router.get("/showAll", Post.showAll)
router.get("/show", Post.show)
router.delete("/delete", Post.delete)

module.exports = router

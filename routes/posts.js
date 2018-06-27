const express = require ("express")
const router = express.Router()
const Post = require("../controllers/posts_controller.js")

router.post("/add",Post.add)
router.get("/showAll", Post.showAll)
router.get("/show", Post.show)
router.delete("/delete", Post.delete)
router.put("/updatelike", Post.updateLike)
router.put("/addcomment",Post.addComment )
router.get("/showOnePost", Post.showOnePost)

module.exports = router

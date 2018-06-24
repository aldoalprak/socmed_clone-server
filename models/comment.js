const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const commentSchema = new Schema({
    content:String,
    postId: {
        type: ObjectId,
        ref: "Post"
    },
    userId: {
        type:ObjectId,
        ref:"User"
    }
})

const CommentModel = mongoose.model("Comment",commentSchema)

module.exports = CommentModel
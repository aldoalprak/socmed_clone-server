const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const postSchema = new Schema({
    content: String,
    commentId:[{
        type: ObjectId,
        ref: "Comment"
    }],
    likeId:[{
        type: ObjectId,
        ref: "Like"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    }
},{timestamps:true})

const postModel = mongoose.model("Post",postSchema)

module.exports = postModel
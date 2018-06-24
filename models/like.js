const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const likeSchema = new Schema({
    status:{
        type: String,
        default: "false"
    },
    postId: {
        type: ObjectId,
        ref: "Post"
    },
    userId: {
        type:ObjectId,
        ref:"User"
    }
})

const LikeModel = mongoose.model("Like",likeSchema)

module.exports = LikeModel
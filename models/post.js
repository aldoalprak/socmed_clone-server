const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const postSchema = new Schema({
    content: String,
    comment:[],
    like:[],
    userId: {
        type: ObjectId,
        ref: "User"
    }
},{timestamps:true})

const postModel = mongoose.model("Post",postSchema)

module.exports = postModel
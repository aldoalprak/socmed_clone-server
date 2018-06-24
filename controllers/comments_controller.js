const commentModel = require('../models/comment.js')
const postModel = require('../models/post.js')
const jwt =  require('jsonwebtoken')

class Comment {

    static add(req,res) {
        const decoded = jwt.verify(req.headers.token,"helloworld123")
        const dataComment = {
            content: req.body.content,
            postId: req.body.postId
        }
        dataComment.userId = decoded.userId
        commentModel.create(dataComment)
        .then(dataComment=>{
            // postModel.findOne({_id:dataComment.postId})
            // .then(dataPost=>{
            //     console.log("masuk findone",dataPost)
            //     dataPost.commentId.push(dataComment._id)
            //     dataPost.save()
                
            // })
            // .catch(err=>{
            //     res.status(500).json({message:err.message})
            // })
            res.status(200).json({message:"comment sent!!",dataComment})
        })  
        .catch(err=>{
            res.status(500).json({message:err.message})
        })
    }

    static showAll(req,res) {
        commentModel.find()
        .populate('userId')
        .then(dataComments=>{
            res.status(200).json(dataComments)
        })
        .catch(err=>{
            res.status(500).json({message:err.message})
        })
    }

    static show(req,res) {
        
        commentModel.find({postId:req.headers.id})
        .populate('userId')
        .then(dataComments=>{
            console.log(req.headers.id)
            res.status(200).json(dataComments)
        })
        .catch(err=>{
            res.status(500).json({message:err.message})
        })
    }
}

module.exports = Comment
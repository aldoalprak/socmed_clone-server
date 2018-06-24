const postModel = require("../models/post.js")
const jwt = require("jsonwebtoken")

class Post {

    static add(req,res) {
        const decoded = jwt.verify(req.headers.token,"helloworld123")
        const dataPost = {
            content: req.body.content,
        }
        dataPost.userId = decoded.userId
        postModel.create(dataPost)
        .then(dataPost=>{
            res.status(200).json({message:"post sent!!",dataPost})
        })
        .catch(err=>{
            res.status(500).json({message:err.message})
        })
    }

    static showAll(req,res) {
        postModel.find()
        .populate('userId','username')
        .populate('likeId')
        .populate('commentId')
        .exec(function(err,dataPosts) {
            if(err) {
                res.status(500).json({message:err.message})
            }else{
                res.status(200).send(dataPosts)
            }
        })
        
    }

    static show(req,res) {
        const decoded = jwt.verify(req.headers.token,"helloworld123")
        postModel.find({userId:decoded.userId})
        .then(dataPosts=>{
            res.status(200).send(dataPosts)
        })
        .catch(err=>{
            res.status(500).json({message:err.message})
        })
    }
    

    static delete(req,res) {
        postModel.deleteOne({_id: req.body.postId})
        .then(result=>{
            res.status(200).json({message:"post deleted!!",result})
        })
        .catch(err=>{
            res.status(500).json({message:err.message})
        })
    } 

}

module.exports = Post
const likeModel = require('../models/like.js')
const postModel = require('../models/post.js')
const jwt = require('jsonwebtoken')

class Like {

    static add(req,res) {
        
        const decoded= jwt.verify(req.headers.token,"helloworld123")
        const dataLike = {
            postId: req.body.postId,
            status: req.body.status
        }
       dataLike.userId = decoded.userId

       likeModel.create(dataLike)
       .then(dataLike=>{
            postModel.findOne({_id:dataLike.postId})
            .then(dataPost=>{
                console.log("masuk findone",dataPost)
                dataPost.likeId.push(dataLike._id)
                dataPost.save()
                
            })
            .catch(err=>{
                res.status(500).json({message:err.message})
            })
        res.status(200).json({message:"like submitted",dataLike })
       })
       .catch(err=>{
           res.status(500).json({message:err.message})
       })
    }    
}

module.exports = Like
let express = require('express');
let route = express.Router();
let { COMMENT_MODEL } = require('../models/comment');
let { POST_MODEL } = require('../models/post');
let ObjectID = require('mongoose').Types.ObjectId;

route.delete('/delete/:id', async(req, res) => {
    try {
        let id = req.params.id;
        const deleted = await COMMENT_MODEL.findOneAndRemove({
            _id: id
        })
        
        if (deleted) {
            res.json({ message: 'DELETED', data: deleted })
        } else {
            res.status(404)
                .json({ message: `Post you are looking for does not exist ` })
        }
    } catch (error) {
        res.json({ error: true, message: error.message })

    }
})


route.get('/list/:postID', async(req, res) => {
    try {
        let list = await COMMENT_MODEL.find({
            postModelID: req.params.postID
        })
        res.json({ error: false, data: list })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})

// route.get('/list/isActive', async(req, res) => {
//     try {
//         let list = await COMMENT_MODEL.find({
            
//         })
//         res.json({ error: false, data: list })
//     } catch (error) {
//         res.json({ error: true, message: error.message })
//     }
// })

route.get('/list', async(req, res) => {
    try {
        let list = await COMMENT_MODEL.find({

        })
        res.json({ error: false, data: list })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})


route.post('/add', async(req, res) => {
    try {
        let { email, name, comment, postModelID, isActive } = req.body;
        let commentInfo = new COMMENT_MODEL({ email, name, comment, postModelID, isActive });
        //CHECK THE CATEGORY ID
        if (!ObjectID.isValid(postModelID))
            res.json({ error: true, message: 'param_invalid_category_id' });

        //SAVE COMMENT TO THE DATABASE
        let commentAfterInserted = await commentInfo.save();
        if (!commentAfterInserted) res.json({ error: true, message: 'Cannot comment the post' })

        let { _id: commentID } = commentAfterInserted; // GET THE COMMENT ID 

        //FINDING THE SPECIFIC ID AND PUSH COMMENT TO THE POST
        let pushCommentToPost = await POST_MODEL.findOneAndUpdate({ _id: postModelID }, { $push: { comment: commentID } });
        if (!pushCommentToPost) res.json({ error: true, message: 'cannot_update_course' });
        console.log(pushCommentToPost);

        res.json({ error: false, data: pushCommentToPost })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})

exports.COMMENT_ROUTE = route
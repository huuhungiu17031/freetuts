let express = require('express');
let route = express.Router();
let { POST_MODEL } = require('../models/post');
let { COURSE_MODEL } = require('../models/course');
let { SUB_MODEL } = require('../models/sub');
// OBJECT ID
let ObjectID = require('mongoose').Types.ObjectId;
const PAGE_SIZE = 6;
//GET ALL THE POSTS
route.get('/list', async(req, res) => {
    try {
        let page = req.query.page
        if (page) {
            //Get page
            page = parseInt(page);
            var skip = (page - 1) * PAGE_SIZE;
            let listCourse = await POST_MODEL
                .find({})
                .skip(skip)
                .limit(PAGE_SIZE)
            res.json({ error: false, data: listCourse })
        } else {
            let listCourse = await POST_MODEL.find({})
            res.json({ error: false, data: listCourse })
        }
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});

//ADD POST AND UPDATE POSTS ARRAY IN COURSE MODEL
route.post('/add', async(req, res) => {
    try {
        let { title, description, courseModelID, imageURL, subModelID, comments } = req.body;
        let inforPost = new POST_MODEL({ title, description, courseModelID, imageURL, subModelID, comments });

        // SAVING POST MODEL TO DATABASE
        let inforPostAfterInserted = await inforPost.save();
        if (!inforPostAfterInserted) res.json({ error: true, message: "Can not insert" });

        let { _id: subID } = inforPostAfterInserted;
        // FINDING THE ID AND PUSH THE POST INTO THE COURSE
        let pushPostToCourse = await COURSE_MODEL.findOneAndUpdate({ _id: courseModelID }, { $push: { posts: subID } });
        if (!pushPostToCourse) res.json({ error: true, message: 'cannot_update_course' });

        // FINDING THE ID AND PUSH THE POST INTO SUB
        let pushPostToSub = await SUB_MODEL.findOneAndUpdate({ _id: subModelID }, { $push: { posts: subID } });
        if (!pushPostToSub) res.json({ error: true, message: 'cannot_update_course' });

        // RETURN THE RESULST
        res.json({ error: false, data: inforPostAfterInserted, message: `Added successfully ${inforPostAfterInserted.title}` });
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});



//GET DETAIL OF POST
route.get('/list/:postID', async(req, res) => {
    try {
        let page = req.query.page;
        if (page) {
            //Get page
            page = parseInt(page);
            var skip = (page - 1) * PAGE_SIZE;
            let list = await POST_MODEL.find({
                    _id: req.params.postID
                })
                .populate({
                    path: 'comment'
                })
                .skip(skip)
                .limit(PAGE_SIZE)
            res.json({ error: false, data: list })
        } else {
            //Get all
            let list = await POST_MODEL.find({
                _id: req.params.postID
            }).populate({
                path: 'comment'
            })
            res.json({ error: false, data: list })
        }

    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});
//GET DETAIL OF POST
route.get('/listPost/:courseID', async(req, res) => {
    try {
        let page = req.query.page;
        if (page) {
            //Get page
            page = parseInt(page);
            var skip = (page - 1) * PAGE_SIZE;
            let list = await POST_MODEL.find({
                    courseModelID: req.params.courseID
                })
                .skip(skip)
                .limit(PAGE_SIZE)
            res.json({ error: false, data: list })
        } else {
            let list = await POST_MODEL.find({
                courseModelID: req.params.courseID
            })
            res.json({ error: false, data: list })
        }

    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});

route.get('/postOfSub/:subID', async(req, res) => {
    try {
        let page = req.query.page;
        if (page) {
            //Get page
            page = parseInt(page);
            var skip = (page - 1) * PAGE_SIZE;
            let list = await POST_MODEL.find({
                subModelID: req.params.subID
            })

            .populate({
                    path: 'subModelID',
                    select: 'title',
                })
                .skip(skip)
                .limit(PAGE_SIZE)
            res.json({ error: false, data: list, length: list.length })
        } else {
            let list = await POST_MODEL.find({
                    subModelID: req.params.subID
                })
                .populate({
                    path: 'subModelID',
                    select: 'title',
                })

            res.json({ error: false, data: list, length: list.length })
        }

    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});

route.delete('/delete/:id', async(req, res) => {
    try {
        let id = req.params.id;
        const deleted = await POST_MODEL.findOneAndRemove({
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


route.put('/update/:id', async(req, res) => {
    try {
        let id = req.params.id;
        const update = await POST_MODEL.findOneAndUpdate({ _id: id }, req.body);
        const postAfterUpdate = await POST_MODEL.findOne({ _id: id })

        res.json({ message: 'Updated successfully', data: postAfterUpdate })
    } catch (error) {
        res.json({ error: true, message: error.message })

    }
})
exports.POST_ROUTE = route;
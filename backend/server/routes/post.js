let express = require('express');
let route = express.Router();
let { POST_MODEL } = require('../models/post');
let { COURSE_MODEL } = require('../models/course');
let { SUB_MODEL } = require('../models/sub');
// OBJECT ID
let ObjectID = require('mongoose').Types.ObjectId;
const PAGE_SIZE = 4;
//GET ALL THE POSTS
route.get('/list', async(req, res) => {
    try {
        let listCourse = await POST_MODEL.find({});
        res.json({ error: false, data: listCourse })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});

//ADD POST AND UPDATE POSTS ARRAY IN COURSE MODEL
route.post('/add', async(req, res) => {
    try {
        let { title, description, courseModelID, imageURL, subModelID } = req.body;
        let inforPost = new POST_MODEL({ title, description, courseModelID, imageURL, subModelID });

        // SAVING POST MODEL TO DATABASE
        let inforPostAfterInserted = await inforPost.save();
        if (!inforPostAfterInserted) res.json({ error: true, message: "Can not insert" });

        // FINDING THE ID AND PUSH THE POST INTO THE COURSE
        let { _id: subID } = inforPostAfterInserted;
        let pushPost = await COURSE_MODEL.findOneAndUpdate({ _id: courseModelID }, { $push: { posts: subID } });
        if (!pushPost) res.json({ error: true, message: 'cannot_update_course' });

        // RETURN THE REULST
        res.json({ error: false, data: inforPostAfterInserted });
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});




//ADD POST AND UPDATE POSTS ARRAY IN SUB MODEL
route.post('/addToSub', async(req, res) => {
    try {
        let { title, description, subModelID, imageURL } = req.body;
        let inforPost = new POST_MODEL({ title, description, subModelID, imageURL });

        // SAVING POST MODEL TO DATABASE
        let inforPostAfterInserted = await inforPost.save();
        if (!inforPostAfterInserted) res.json({ error: true, message: "Can not insert" });

        // FINDING THE ID AND PUSH THE POST INTO THE COURSE
        let { _id: subID } = inforPostAfterInserted;
        let pushPost = await SUB_MODEL.findOneAndUpdate({ _id: subModelID }, { $push: { posts: subID } });
        if (!pushPost) res.json({ error: true, message: 'cannot_update_course' });

        // RETURN THE REULST
        res.json({ error: false, data: inforPostAfterInserted });
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
                .skip(skip)
                .limit(PAGE_SIZE)
            res.json({ error: false, data: list })
        } else {
            //Get all
            let list = await POST_MODEL.find({
                _id: req.params.postID
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
                
                .populate('courseModelID')
                .skip(skip)
                .limit(PAGE_SIZE)
            res.json({ error: false, data: list, length: list.length })
        } else {
            let list = await POST_MODEL.find({
                subModelID: req.params.subID
            })
            .populate('courseModelID')
            res.json({ error: false, data: list, length: list.length })
        }

    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});


exports.POST_ROUTE = route;
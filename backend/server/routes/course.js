let express = require('express');
let route = express.Router();
let { COURSE_MODEL } = require('../models/course');
let { SUB_MODEL } = require('../models/sub');
// OBJECT ID
let ObjectID = require('mongoose').Types.ObjectId;

route.get('/list', async(req, res) => {
    try {
        let listCourse = await COURSE_MODEL.find({}).populate('posts');
        res.json({ error: false, data: listCourse })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})

route.post('/add', async(req, res) => {
    try {
        let { title, description, subCategory } = req.body;
        let inforCourse = new COURSE_MODEL({ title, description, subCategory });
        // SAVING COURSE MODEL TO DATABASE
        let inforCourseAfterInserted = await inforCourse.save();
        if (!inforCourseAfterInserted) res.json({ error: true, message: "Can not insert" });
        // FINDING THE ID AND PUSH THE COURSE INTO THE SUBCATEGORY
        let pushCourse = await SUB_MODEL.findOneAndUpdate({ _id: subCategory }, { $push: { courses: inforCourseAfterInserted } });
        if (!pushCourse) res.json({ error: true, message: 'cannot_update_category' });


        res.json({ error: false, data: inforCourseAfterInserted });
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})


route.get('/list/:courseID', async(req, res) => {
    try {
        let list = await COURSE_MODEL.find({
            _id: req.params.courseID
        }).populate('posts').populate({
            path: 'subCategory',
            select: 'title'
        })
        res.json({ error: false, data: list })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});




exports.COURSE_ROUTE = route;
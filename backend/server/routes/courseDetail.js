let express = require('express');
let route = express.Router();
let { COURSE_DETAIL_MODEL } = require('../models/courseDetail');
let { COURSE_MODEL } = require('../models/course');
let { EXERCISE_MODEL } = require('../models/exercise');
let ObjectID = require('mongoose').Types.ObjectId;

route.post('/add', async(req, res) => {
    try {
        let { title, logo, description, courseModelID } = req.body;
        if (!ObjectID.isValid(courseModelID))
            res.json({ error: true, message: 'param_invalid_post_id' });

        let inforDetailCourse = new COURSE_DETAIL_MODEL({
            title,
            logo,
            description,
            courseModelID
        })

        let inforDetailCourseAfterInserted = await inforDetailCourse.save();
        if (!inforDetailCourseAfterInserted) res.json({ error: true, message: "Cannot insert" })
        console.log(inforDetailCourseAfterInserted)
        let detailCourseId = inforDetailCourseAfterInserted._id;

        let pushToCourse = await COURSE_MODEL.findOneAndUpdate({ _id: courseModelID }, {
            $push: {
                courseDetail: detailCourseId
            }
        })
        console.log(pushToCourse)
        res.json({ error: false, data: pushToCourse })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})
route.get('/detail/:id', async(req, res) => {
    try {
        let list = await COURSE_DETAIL_MODEL.findOne({
            _id: req.params.id
        })
        res.json({ error: false, data: list });
    } catch (error) {
        res.json({ error: true, data: error.message });

    }
})
route.get('/allExercise/:id', async(req, res) => {
    try {
        let list = await EXERCISE_MODEL.find({
                courseDetailModelId: req.params.id
            })
            .populate({
                path: 'subExercise'
            })
        res.json({ error: false, data: list });
    } catch (error) {
        res.json({ error: true, data: error.message });
    }
})
exports.COURSE_DETAIL_ROUTE = route;
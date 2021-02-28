let express = require('express');
let route = express.Router();
let { EXERCISE_MODEL } = require('../models/exercise');
let { SUB_EXERCISE_MODEL } = require('../models/subExercise')

const PAGE_SIZE = 15;


route.get('/list', async(req, res) => {
        try {
            let page = req.query.page
            if (page) {
                //Get page
                page = parseInt(page);
                var skip = (page - 1) * PAGE_SIZE;
                let list = await SUB_EXERCISE_MODEL
                    .find({})
                    .skip(skip)
                    .limit(PAGE_SIZE)
                res.json({ error: false, data: list })

            } else {
                let list = await SUB_EXERCISE_MODEL.find({})
                res.json({ error: false, data: list })
            }
        } catch (error) {
            res.json({ error: true, message: error.message })
        }
    })
    //ADD POST AND UPDATE POSTS ARRAY IN COURSE MODEL
route.post('/add', async(req, res) => {
    try {
        let { title, description, exerciseModelId, video } = req.body;
        let inforSubExercise = new SUB_EXERCISE_MODEL({ title, description, exerciseModelId, video });

        // SAVING SUB EXERCISE MODEL TO DATABASE
        let inforSubExerciseAfterInserted = await inforSubExercise.save();
        if (!inforSubExerciseAfterInserted) res.json({ error: true, message: "Can not insert" });

        let { _id: subExerciseID } = inforSubExerciseAfterInserted;
        // FINDING THE ID AND PUSH THE POST INTO THE COURSE
        let pushSubExerciseToExercise = await EXERCISE_MODEL.findOneAndUpdate({ _id: exerciseModelId }, { $push: { subExercise: subExerciseID } });
        if (!pushSubExerciseToExercise) res.json({ error: true, message: 'cannot_update_course' });

        // RETURN THE RESULST
        res.json({ error: false, data: inforSubExerciseAfterInserted, message: `Added successfully ${inforSubExerciseAfterInserted.title}` });
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});

route.get('/detail/:id', async(req, res) => {
    try {
        let id = req.params.id;
        let list = await SUB_EXERCISE_MODEL.findOne({
            _id: id
        })
        res.json({ error: false, data: list })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})

exports.SUB_EXERCISE_ROUTE = route;
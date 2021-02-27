let express = require('express');
let route = express.Router();
let { EXERCISE_MODEL } = require('../models/exercise')

route.post('/add', async(req, res) => {
    try {
        let { title, courseDetailModelId } = req.body;
        let inforExercise = new EXERCISE_MODEL({ title, courseDetailModelId });

        // SAVING COURSE MODEL TO DATABASE
        let inforExerciseAfterInserted = await inforExercise.save();
        if (!inforExerciseAfterInserted) res.json({ error: true, message: "Can not insert" });

        res.json({ error: false, data: inforExerciseAfterInserted });
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})

route.get('/list/:id', async(req, res) => {
    try {
        let id = req.params.id

        let list = await EXERCISE_MODEL.find({
            _id: id
        }).populate({
            path:'subExercise'
        })
        res.json({ error: false, data: list })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})

exports.EXERCISE_ROUTE = route
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let exerciseSchema = new Schema({
    title: { //add
        type: 'string',
    },
    courseDetailModelId: {
        type: Schema.Types.ObjectId,
        ref: 'coursedetails'
    }, //add
    subExercise: [{
        type: Schema.Types.ObjectId,
        ref: 'subexercises'
    }]
})

let ExerciseModel = mongoose.model('exercises', exerciseSchema);
exports.EXERCISE_MODEL = ExerciseModel;
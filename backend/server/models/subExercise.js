const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let subExerciseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    video: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    exerciseModelId: {
        type: Schema.Types.ObjectId,
        ref: 'exercises'
    }
}, {
    timestamps: true
})

let SubExerciseModel = mongoose.model('subexercises', subExerciseSchema);
exports.SUB_EXERCISE_MODEL = SubExerciseModel
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: 'subs'
    },
    courseDetail: [{
        type: Schema.Types.ObjectId,
        ref: 'coursedetails'
    }],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'posts'
    }],
})

let CourseSchema = mongoose.model('courses', courseSchema);
exports.COURSE_MODEL = CourseSchema;
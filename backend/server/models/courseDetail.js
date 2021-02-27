const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let courseDetailSchema = new Schema({
    title: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    logo: {
        type: 'string',
        required: true
    },
    courseModelID: {
        type: Schema.Types.ObjectId,
        ref: "courses",
    }
}, { timestamps: true })
let CourseDetailSchema = mongoose.model('coursedetails', courseDetailSchema);
exports.COURSE_DETAIL_MODEL = CourseDetailSchema;
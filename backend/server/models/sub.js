const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let subSchema = new Schema({
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
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref: 'courses'
    }]
});


let SubModel = mongoose.model('subs', subSchema);
exports.SUB_MODEL = SubModel
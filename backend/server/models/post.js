const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    imageURL: {
        type: String,
    },
    description: String,
    courseModelID: {
        type: Schema.Types.ObjectId,
        ref: 'courses'
    },
    subModelID: {
        type: Schema.Types.ObjectId,
        ref: 'subs'
    },
    createAt: {
        type: Date,
        default: Date.now
    },
})


let PostModel = mongoose.model('posts', postSchema);
exports.POST_MODEL = PostModel;
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let commentSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    comment: {
        type: String,
        required: true,
        trim: true,
    },
    postModelID: {
        type: Schema.Types.ObjectId,
        ref: 'posts'
    }
}, { timestamps: true })

let CommentModel = mongoose.model('comments', commentSchema);
exports.COMMENT_MODEL = CommentModel;
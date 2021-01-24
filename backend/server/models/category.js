const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let categorySchema = new Schema({  // Make instance of the schema
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    order: Number,
    children:[{
        type: Schema.Types.ObjectId,
        ref: 'subs'
    }]
})


let CategoryModel = mongoose.model('categories', categorySchema);
exports.CATEGORY_MODEL = CategoryModel;
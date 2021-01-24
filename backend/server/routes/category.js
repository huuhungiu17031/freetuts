let express = require('express');
let route = express.Router();
let { CATEGORY_MODEL } = require('../models/category');
const { SUB_MODEL } = require('../models/sub');
// ADD CATEGORY 
route.post('/add', async(req, res) => {
    try {
        let { title, order } = req.body;
        let inforCategory = new CATEGORY_MODEL({
            title,
            order
        })

        let inforCategoryAfterInserted = await inforCategory.save();
        res.json({ inforCategoryAfterInserted })
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
})

// GET LIST OF CATEGORY
route.get('/list', async(req, res) => {
    try {
        let list_category = await CATEGORY_MODEL
            .find({})
            .populate({
                path: 'children',
                populate: {
                    path: 'courses',
                }
            })
        res.json({ error: false, list_category });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
})
route.get('/withoutChildren', async(req, res) => {
    try {
        let list_category = await CATEGORY_MODEL
            .find({})
        res.json({ error: false, list_category });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
})
exports.CATEGORY_ROUTE = route;
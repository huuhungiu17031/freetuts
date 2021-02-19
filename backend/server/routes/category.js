let express = require('express');
let route = express.Router();
let { CATEGORY_MODEL } = require('../models/category');

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
});

// GET LIST OF CATEGORY
route.get('/list', async(req, res) => {
    try {
        let list_category = await CATEGORY_MODEL
            .find({})
            .populate({
                path: 'children',
                select: 'title',
                populate: {
                    path: 'courses',
                 
                }
            })
        res.json({ list_category });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

//DELETE THE CATEGORY
route.delete('/remove/:id', async(req, res) => {
    try {
        let id = req.params.id;
        let infoUserAfterRemove = await CATEGORY_MODEL.findOneAndDelete({
            _id: id
        });
        res.json({ message: 'Xoa thanh cong' + infoUserAfterRemove.title })
    } catch (error) {
        res.json({ error: true, message: err.message });
    }

});

exports.CATEGORY_ROUTE = route;
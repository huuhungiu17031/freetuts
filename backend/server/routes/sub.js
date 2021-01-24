let express = require('express');
let route = express.Router();
//ADD SUB MODEL TO THE ROUTES
let { SUB_MODEL } = require('../models/sub');
let { CATEGORY_MODEL } = require('../models/category');
let ObjectID = require('mongoose').Types.ObjectId;
//ADD SUB-CATEGORY


route.post('/add', async(req, res) => {
    try {
        let { title, description, category } = req.body;
        let inforSub = new SUB_MODEL({ title, description, category })
        let inforSubAfterInserted = await inforSub.save();
        if (!inforSubAfterInserted) res.json({ error: true, message: "Can not insert" });

        let pushData = await CATEGORY_MODEL.findOneAndUpdate({ _id: category }, { $push: { children: inforSubAfterInserted._id } });

        if (!pushData) res.json({ error: true, message: 'cannot_update_category' });

        res.json({ error: false, data: inforSubAfterInserted });

    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})

route.get('/list', async(req, res) => {
    try {
        let listSub = await SUB_MODEL.find({}).populate('courses')
        res.json({ error: false, data: listSub })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }

})

route.get('/list/:categoryID', async(req, res) => {
    try {
        let list = await SUB_MODEL.find({
            category: req.params.categoryID
        }).populate('catergory')
        res.json({ error: false, data: list })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});







exports.SUB_ROUTE = route;
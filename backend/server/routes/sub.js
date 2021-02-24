let express = require('express');
let route = express.Router();
//ADD SUB MODEL TO THE ROUTES
let { SUB_MODEL } = require('../models/sub');
let { CATEGORY_MODEL } = require('../models/category');
let ObjectID = require('mongoose').Types.ObjectId;





route.get('/list', async(req, res) => {
    try {
        let listSub = await SUB_MODEL.find({})
            .populate({
                path: 'posts',
                options: {
                    limit: 5,
                }
            })
            .populate({
                path: 'courses'
            })
        res.json({ errlor: false, data: listSub })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }

});

//ADD SUB AND UPDATE CHILDREN IN CATEGORY MODEL
route.post('/add', async(req, res) => {
    try {
        let { title, description, category } = req.body;

        //CHECK THE CATEGORY ID
        if (!ObjectID.isValid(category))
            res.json({ error: true, message: 'param_invalid_category_id' });

        //CREATE AN INSTANCE OF THE SUB MODEL
        let inforSub = new SUB_MODEL({ title, description, category });

        // SAVING SUB MODEL TO DATABASE
        let inforSubAfterInserted = await inforSub.save();
        if (!inforSubAfterInserted) res.json({ error: true, message: "Can not insert" });

        // FINDING THE ID AND PUSH THE SUB INTO THE CATEGORY MODEL
        let { _id: subID } = inforSubAfterInserted;
        let pushSUB = await CATEGORY_MODEL.findOneAndUpdate({ category }, { $push: { children: subID } });
        if (!pushSUB) res.json({ error: true, message: 'cannot_update_category' });

        // RETURN THE REULST
        res.json({ error: false, data: inforSubAfterInserted });
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})



route.get('/list/:subID', async(req, res) => {
    try {
        let list = await SUB_MODEL.find({
                _id: req.params.subID
            })
            .populate({
                path: 'courses',
            })
            .populate({
                path: 'posts',
            })
        res.json({ error: false, data: list })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});




route.get('/listAds', async(req, res) => {
    try {
        let listSub = await SUB_MODEL.find({}).populate({
            path: 'posts',
        })
        res.json({ error: false, data: listSub, length: listSub.length })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})


route.get('/listAds/:id', async(req, res) => {
    try {
        let listSub = await SUB_MODEL.find({
                _id: req.params.id
            })
            .populate({
                path: 'posts',
            })
            .populate('courses')
        res.json({ error: false, data: listSub })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})


exports.SUB_ROUTE = route;
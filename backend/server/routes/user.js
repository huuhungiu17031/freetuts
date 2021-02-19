let express = require("express");
let route = express.Router();

let jwt = require("jsonwebtoken");
let { USER_MODEL } = require("../models/user");

route.post("/login", async(req, res, next) => {
    try {
        let { username, password } = req.body;
        let account = await USER_MODEL.findOne({ username, password });
        if (account) {
            let tokenFromJwt = jwt.sign({ _id: account._id }, 'mk');
            res.json({
                message: 'Login successfully',
                token: tokenFromJwt
            });
        } else {
            res.json("Sai tai khoan hoac mat khau");
        }
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
});

route.post("/create", async(req, res, next) => {
    try {
        let { username, password, role } = req.body;
        let newAccount = new USER_MODEL({ username, password, role });
        // SAVING POST MODEL TO DATABASE
        let accountAfterSave = await newAccount.save();
        // RETURN THE REULST
        res.json({ error: false, data: accountAfterSave });
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
});
route.get('/comment/:token', (req, res, next) => {
    console.log(req.params.token);
    next();
}, (req, res, next) => {
    // console.log(req.cookies.token)

    res.json('comment')
})
exports.USER_ROUTE = route;
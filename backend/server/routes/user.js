let express = require("express");
let route = express.Router();

let jwt = require("jsonwebtoken");
let { USER_MODEL } = require("../models/user");

route.post("/login", async(req, res, next) => {
    try {
        let { username, password } = req.body;
        let account = await USER_MODEL.findOne({ username, password });
        if (!account) res.json({ message: 'Tài khoản hoặc mật khẩu không đúng' });
        res.json({ message: 'Login successfully', data: account })
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

exports.USER_ROUTE = route;
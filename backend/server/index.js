const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
require('dotenv/config')
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Add the routes here
const { CATEGORY_ROUTE } = require('./routes/category');
const { SUB_ROUTE } = require('./routes/sub');
const { COURSE_ROUTE } = require('./routes/course');
const { POST_ROUTE } = require('./routes/post');



app.use("/category", CATEGORY_ROUTE);
app.use("/sub", SUB_ROUTE);
app.use("/course", COURSE_ROUTE);
app.use('/post', POST_ROUTE);
app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'Server connected' });
})

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    createIndexes: true
});

mongoose.connection.once('open', () => {
    console.log('Mongoosedb has beenn connected');
    app.listen(3000, () => { console.log(`Server started at port 3000`) });
})
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const cors = require('cors');
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('dotenv').config();

const addbill = require('./routes/savebillrecord');
const editbill = require('./routes/editbillrecord');
const deletebill = require('./routes/deletebillrecord');
const getbill = require('./routes/getbillrecord');


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database Connected Successfully'))
.catch((err) => console.error(err+'Database Connection Failed'));

app.use('/',addbill);
app.use('/',editbill);
app.use('/',deletebill);
app.use('/',getbill);

app.get("/",(req, res)=>{
    res.send("Welcome to Server");
});

app.listen(5000, ()=>{
    console.log("server running on port 5000");
});
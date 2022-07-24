const express = require('express');
const router = express.Router();

const BillRecord = require('../model/billrecord');

router.get('/',(req, res)=>{
    BillRecord.find({}).exec(function(err, details){
        if(err){
            console.log(err);
        }
        else {
            res.json(details);
        }
    });
});

router.get('/bill/:id',(req, res)=>{
    BillRecord.find({'_id':req.params.id}, function(err, details){
        if(err){
            console.log(err);
        }
        else {
            res.json(details);
        }
    });
});

module.exports = router;



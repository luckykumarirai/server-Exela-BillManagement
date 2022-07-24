const express = require('express');
const router = express.Router();
const BillRecord = require('../model/billrecord');

router.get('/delete/:id',(req, res) =>{ 
    BillRecord.findOneAndRemove({'_id':req.params.id})
    .then((record) => {
        if(record){
            var message = { success: "record sucessfully deleted" };
            res.json(message);
        }else{
            var message = { error: "record not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = { success: false, err: err };
        res.json(message);
    })
});

module.exports = router;
const express = require('express');
const router = express.Router();
const BillRecord = require('../model/billrecord');

router.put('/:id/edit',(req, res) =>{

    var UpdateBill = {
        billDate: req.body.billDate,
        paidDate: req.body.paidDate,
        unitConsumed: req.body.unitConsumed,
        amount: req.body.amount
    }
    BillRecord.findOneAndUpdate({'_id':req.params.id}, UpdateBill)
    .then((record) => {
        if(record){
            var message = { message: "record sucessfully updated" };
            res.json(message);
        }else{
            var message = { message: "record not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = {message:"Something went wrong!", err: err };
        res.json(message);
    })
});

module.exports = router;
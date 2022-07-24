const express = require('express');
const router = express.Router();

const BillRecord = require('../model/billrecord');

router.post('/', async (req, res)=>{

    const billDate= req.body.billDate;
    const paidDate= req.body.paidDate;
    const unitConsumed = req.body.unitConsumed;
    const amount = req.body.amount;

    var newRecord = new BillRecord({billDate,paidDate,unitConsumed,amount});

    newRecord.save()
    .then(response => {
        var message={message:"successfully added!",data:response};
        res.json(message);
    })
    .catch(err => {
        var message = {message:"All field required!",error:err};
        res.json(message);
    })
});

module.exports = router;
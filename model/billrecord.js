const mongoose = require('mongoose');

const billrecordSchema = new mongoose.Schema({
  billDate: {
    type: String,
    required: false
  },
  paidDate :{ 
    type: String,
    required: false
  },
  unitConsumed :{ 
    type: String,
    required: false
  },
  amount :{ 
    type: String,
    required: false
  },
},
{
  timestamps: true
});

const BillRecord = mongoose.model('billrecord', billrecordSchema);
module.exports = BillRecord;
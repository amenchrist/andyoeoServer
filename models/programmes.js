const mongoose = require('mongoose');

const programmeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    deliveryPattern: String,
    courseLevel: Number,
    programmeLocation: [ String ],
    programmeGroup: String,
    fundedBySLC: String,
    courseFee: String,
    firstYearFee: String,

});

module.exports = mongoose.model('Programme', programmeSchema);
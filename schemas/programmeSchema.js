const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programmeSchema = new Schema({
    id: Number,
    name: String,
    deliveryPattern: String,
    courseLevel: Number,
    programmeLocation: [ String ],
    programmeGroup: String,
    fundedBySLC: String,
    courseFee: String,
    firstYearFee: String,

})

module.exports = programmeSchema;
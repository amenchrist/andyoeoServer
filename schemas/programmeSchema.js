const programmeSchema = {
    id: Number,
    name: String,
    deliveryPattern: String,
    courseLevel: Number,
    programmeLocation: [ String ],
    programmeGroup: String,
    fundedBySLC: String,
    courseFee: String,
    firstYearFee: String,

}

module.exports = programmeSchema;
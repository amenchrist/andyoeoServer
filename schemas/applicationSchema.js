const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema ({
    id: Number,
    agent: String,
    applicant: String,
    programme: String,
    deliveryPattern: String,
    intake: String,
    submissionDate: String,
    status: String,
    offer: String,
    registrationSent: String,
    enrolmentStatus: String,
    interview: String
})

module.exports = applicationSchema;
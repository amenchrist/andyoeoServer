const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agentSchema = new Schema ({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    password: String
})

module.exports = agentSchema;
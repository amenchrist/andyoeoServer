const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema ({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    password: String
});

module.exports = mongoose.model('Agent', agentSchema);
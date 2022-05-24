const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Schema = mongoose.Schema;
const model = mongoose.model;

const PORT = process.env.PORT || 7000;

let localDB = "mongodb://localhost:27017/andyoeoDB";

mongoose.connect(localDB, {useNewUrlParser: true})


const agentSchema = require('./schemas/agentSchema');
const applicationSchema = require('./schemas/applicationSchema');
const programmeSchema = require('./schemas/programmeSchema');
const studentSchema = require('./schemas/studentSchema');

const Agent = model("Agent", agentSchema)
const Application = model("Application", applicationSchema);
const Programme = model("Programme", programmeSchema);
const Student = model("Student", studentSchema);

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res) => {
    console.log("Server was accessed")
    res.send("Hello There")
} )

app.listen(PORT, () => {
    console.log(`listening on Port: ${PORT}`)
})
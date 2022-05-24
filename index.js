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


let studentCsvPath = './DUMMY DATA - ANDYOEO STUDENTS.csv';

function convertCsvTableToArrayOfObjects(filePath){ //Headers must be on top
    //getting dummy data
    const fs = require('fs');
    let records = fs.readFileSync(filePath, {encoding: 'utf-8', flag: 'r'}).split("\n");
    let recordsHeader = records.shift().trim().split(",");

    let record1 = records[0].trim().split(",");
    let arr = []
    records.forEach(val => {
        let newRec = {}
        let record = val.trim().split(",");
        for(i=0; i<recordsHeader.length; i++){
            newRec[recordsHeader[i]] = record[i]
        }
        arr.push(newRec);
    })

    return arr
}

let data = convertCsvTableToArrayOfObjects(studentCsvPath)


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res) => {
    console.log("Server was accessed")
    res.send(data[0]);
} )

app.listen(PORT, () => {
    console.log(`listening on Port: ${PORT}`);
    //console.log(record1);
    //console.log(newRec);
})


const express = require('express');
const router = express.Router();
const Application = require('../models/applications');

//const data = require('../data/data')
const mongoose = require('mongoose');

//Application.insertMany(data);

let query = {}

//Get all applications
router.get('/', (req, res) => {
    console.log('applications router accessed');
    Application.find((err, record) => {
        if(err){
            console.log(err);
            res.redirect('/')
        } else {
            res.json(record);
        }
    })      
});

// //Get Specific Application
// router.get('/', (req, res) => {
//     query.id = req.query.id
//     res.json(Application.find(query))
// });

//Create new application
router.post('/', (req, res) => {
    console.log(req.body)
    res.json('new data received')
    const application = new Application(req.body)
    application.save()
});

//Update Application
router.put('/', (req, res) => {
    let app = Application.updateOne(Application.find(query), req.body)
});

//Delete Application
router.delete('/', (req, res) => {
    Application.delete(query)
});

module.exports = router;


// agent: req.body.agent,
// applicant: req.body.applicant,
// programme: req.body.programme,
// deliveryPattern: req.body.deliveryPattern,
// intake: req.body.intake,
// submissionDate: req.body.author,
// status: req.body.author,
// offer: req.body.author,
// registrationSent: req.body.author,
// enrolmentStatus: req.body.author,
// interview: req.body.author
const express = require('express');
const router = express.Router();
const Application = require('../models/applications');

let query = {}
//Get all applications
router.get('/', (req, res) => {

    Application.find(query)
});

//Get Specific Application
router.get('/', (req, res) => {
    Application.find(query)
});

//Create new application
router.post('/', (req, res) => {
    
});

//Update Application
router.put('/', (req, res) => {
    Application.updateOne(Application.find(query), req.body)
});

//Delete Application
router.delete('/', (req, res) => {
    Application.delete(query)
});

module.exports = router;
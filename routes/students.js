const express = require('express');
const router = express.Router();
const Student = require('../models/students');

router.get('/', async (req, res) => {
    let query = {};
    let students = await Student.find(query)
    await console.log(students)
    await res.send(data);
});

module.exports = router;
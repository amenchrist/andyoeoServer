const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    console.log("Server was accessed")
    res.send("Server Reached")
});

module.exports = router;
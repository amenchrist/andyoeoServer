const express = require('express');
const mongo = require('mongo');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Schema = mongoose.Schema;

const PORT = process.env.PORT || 7000;

let localDB = "mongodb://localhost:27017/andyoeoDB";

mongoose.connect(localDB, {useNewUrlParser: true})

app.use(cors);

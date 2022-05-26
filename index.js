const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(bodyParser.json());

let localDB = "mongodb://localhost:27017/andyoeoDB";
mongoose.connect(localDB, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'))

const studentsRouter = require('./routes/students');
const applicationsRouter = require('./routes/applications');
const indexRouter = require('./routes/index');

app.get('/', indexRouter );
app.get('/students', studentsRouter );
app.get('/applications', applicationsRouter );

app.listen(PORT, () => console.log(`listening on Port: ${PORT}`));


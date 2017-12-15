const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const db = mongoose.connection;

mongoose.Promise = global.Promise;
const mongoURI = 'mongodb://localhost/travel_tracker_app'

//Connect to Mongo
mongoose.connect( mongoURI, {useMongoClient: true});

//Error / Success
db.on('error', (err) => console.log(err.message + 'Is Mongod not running?'));
db.on('connected', () => console.log('Mongo connected:', mongoURI));
db.on('disconnected', () => console.log('Mongo disconnected'));

db.on('open', () => {console.log('Connection made!'); });

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const travelController = require('./controllers/travel.js');
const seedController = require('./controllers/seed.js');
app.use('/travel', travelController);
app.use('/seed', seedController);
app.use(express.static('public'));


app.listen( port, () => {
    console.log('=======================');
    console.log('Running on port ' + port);
    console.log('=======================');
});

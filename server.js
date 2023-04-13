//import packages
const express = require('express');
const mongoose = require('mogoose');
const bodyParser = require('body-parser');
const cors =require('cors');

//import routes 
const usersRoutes = require('./routes/users');
const newslettersRoutes = require('./routes/newsletters');
const subscribersRoutes = require('./routes/subscribers');

//create express app
const app = express();

//set up middleware 
app.use(bodyParser.json());
app.use(cors());

//set up database connection
mongoose.connect 
('mongodb://localhost/newsletter_app', {
    useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('MongoDB connected...'))
    .catch(err => console.log(err));
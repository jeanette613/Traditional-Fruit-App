//////////////////////////
// Import Our Dependencies
///////////////////////////
require('dotenv').config(); // Loads Env vars into process.env
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const fruitController = require('./controllers/fruit');
const vegetableController = require('./controllers/vegetable');
const path = require('path');


////////////////////
// App Object Setup 
////////////////////

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');


////////////////////
// Middleware
////////////////////

app.use(morgan("tiny")); // logging
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

/////////////
// Routes
/////////////
app.use('/fruits', fruitController)
app.get('/', (req, res) => {
    res.send(" Your server is running you better go catch it");
})

app.use('/vegetables', vegetableController)
app.get('/', (req, res) => {
    res.send(" Veggies GO!");
})


//////////////////
//Server Listener
//////////////////

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
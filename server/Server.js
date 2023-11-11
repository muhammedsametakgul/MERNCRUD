const express= require('express');
const morgan = require("morgan");
const bodyParser = require("body-parser");
var cors= require('cors');
require('./db/Database');
// Call the function to connect to MongoDB


const PORT=9000;



const studentRoutes = require('./routes/StudentRoutes');
const app=express();

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true
}));
app.use(cors());

app.use('/api',studentRoutes);

app.listen(PORT, ()=>{
    console.log("Succesfully launched App");
});


// import 
const express = require("express");
const bodyParser = require("body-parser");

// .env import
const dotenv = require("dotenv");
dotenv.config();

// DB connection import
const connection = require("./init/mongoDB");


// init app
const app = express();

//connect DB
connection();

//third-party middleware
app.use(express.json({limit:"500mb"}));
app.use(bodyParser.urlencoded({limit:"500mb",extended:true}));

module.exports = app ;
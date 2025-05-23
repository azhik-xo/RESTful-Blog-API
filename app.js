// import 
const express = require("express");
const bodyParser = require("body-parser");

// .env import
const dotenv = require("dotenv");
dotenv.config();

//import morgan -> middleware for handle http request
const morgan = require("morgan");

// import routes
const {authRoute} = require("./routes");

// DB connection import
const connection = require("./init/mongoDB");

// error handler middleware
const {erroHandler} = require("./middleware");


// init app
const app = express();

//connect DB
connection();


//third-party middleware
app.use(express.json({limit:"500mb"}));
app.use(bodyParser.urlencoded({limit:"500mb",extended:true}));
app.use(morgan("dev"));


// routes section
app.use("/api/v1/auth", authRoute);

// not found 
const notFound = require("./controller/notFound");
app.use("*",notFound);

// error handling middleware
app.use(erroHandler);

module.exports = app ;
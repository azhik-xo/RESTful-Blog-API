const mongoose = require("mongoose");
const {connectionUrl} = require("../config/keys");

// connect database

const connection = async()=>{
    try {
        await mongoose.connect(connectionUrl);
        console.log("DB connected successfully");
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = connection;
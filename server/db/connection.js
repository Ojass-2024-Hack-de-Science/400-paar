const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/userRegistration");
        console.log("Connection successful");
    } catch (err) {
        console.error("Connection error:", err);
    }
}

//  module.exports = connectDB;
 connectDB();
const mongoose = require("mongoose")
const config = require('../config');

const Connection = async () => {
  var url =  'mongodb://localhost:27017';

  try {
    console.log(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("Database Connected Succesfully");
    console.log("------------------------------\n");
  } catch (error) {
    console.log('Error While connecting to MongoDB', error);
  }
}

module.exports = Connection;

const mongoose = require("mongoose")
const config = require('../config');

const Connection = async () => {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("Database Connected Succesfully");
    console.log("------------------------------\n");
  } catch (error) {
    console.log('Error While connecting to MongoDB', error);
  }
}



mongoose.connect(URL);

module.exports = Connection;

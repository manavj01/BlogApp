const mongoose = require("mongoose")


const URL = 'mongodb://username:username@webdev-shard-00-00.ztgu1.mongodb.net:27017,webdev-shard-00-01.ztgu1.mongodb.net:27017,webdev-shard-00-02.ztgu1.mongodb.net:27017/webdev?ssl=true&replicaSet=atlas-9lixug-shard-0&authSource=admin&retryWrites=true&w=majority'

const Connection = async () => {
  try {
    await mongoose.connect(URL, {
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

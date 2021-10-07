const mongoose = require('mongoose')


const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true
  },
  categories: {
    type: String,
    required: false
  },
  // createdDate: {
  //   type: Date,
    
  // }
},  { timestamps: true })

const post = mongoose.model('post', PostSchema);

module.exports = post;

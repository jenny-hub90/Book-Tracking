const mongoose = require("mongoose");

const addBookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
    trim: true,
  },

  bookauthor: {
    type: String,
    required: true,
    trim: true,
  },

  image:{
    type: String,
    default: ''
  },

  status:{
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("addBooks", addBookSchema)

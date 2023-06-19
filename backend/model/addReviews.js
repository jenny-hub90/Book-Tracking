const mongoose = require("mongoose");

const addReviewSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  feedback: {
    type: String,
    required: true,
    trim: true,
  },

  image:{
    type: String,
    default: ''
  },
});

module.exports = mongoose.model("addReviews", addReviewSchema)
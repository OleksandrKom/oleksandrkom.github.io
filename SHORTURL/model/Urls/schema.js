const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  fullUrl : {
    type: String,
    required: true,
  },
  // shot_url : {
  //   type: String,
  //   // required: true,
  // },
  //время хранения??
}, { timestamps: true });
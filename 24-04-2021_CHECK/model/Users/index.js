const mongoose = require('mongoose');
const generalSchema = require("./schema");
const path = require("path");


generalSchema.statics.findUsersByName = async function(name) {
  users = await this.find({});
  return users;
};

const modelname = path.basename(__dirname);
const model = mongoose.model(modelname, generalSchema);
module.exports = model;
const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  title: { type: String },
  desciption: { type: String },
  image: { type: String },
});

const Activity = mongoose.model("activity", activitySchema);

module.exports = Activity;

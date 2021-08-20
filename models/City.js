const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: { type: String, required: false },
  prefecture: { type: String, required: false },
  region: { type: String, required: false },
  description: { type: String, required: false },
  src: { type: String, required: false },
  src2: { type: String, required: false },
  src3: { type: String, required: false },
});

const City = mongoose.model("city", citySchema);

module.exports = City;

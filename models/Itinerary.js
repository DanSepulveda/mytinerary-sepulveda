const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  user: { type: Object },
  image: { type: String },
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  duration: { type: Number },
  tags: { type: Array },
  likes: { type: Number, default: 0 },
  comments: { type: Array, default: [] },
  cityId: { type: mongoose.Types.ObjectId, ref: "city" },
});

const Itinerary = new mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;

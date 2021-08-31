const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  user: { type: Object },
  image: { type: String },
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  duration: { type: Number },
  tags: { type: Array },
  likes: { type: Array, default: [] },
  comments: [{
    userId: { type: mongoose.Types.ObjectId, ref: 'user' },
    date: { type: String },
    comment: String,
  }],
  cityId: { type: mongoose.Types.ObjectId, ref: "city" },
  //dar esquema a propiedad comments
});

const Itinerary = new mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;

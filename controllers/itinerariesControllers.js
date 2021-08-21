const Itinerary = require("../models/Itinerary");

const itinerariesControllers = {
  getAllItineraries: async (req, res) => {
    try {
      let itineraries = await Itinerary.find();
      res.json({ success: true, response: itineraries });
    } catch (e) {
      res.json({ success: false, response: "Unable to get data" });
    }
  },
  addNewItinerary: (req, res) => {
    const itinerary = new Itinerary({ ...req.body });
    try {
      itinerary.save();
      res.json({ success: true });
    } catch {
      res.json({ success: false });
    }
  },
  editOneItinerary: async (req, res) => {
    try {
      let edited = await Itinerary.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
      res.json({ response: edited });
    } catch (err) {
      res.json({ response: err.message });
    }
  },
  deleteOneItinerary: async (req, res) => {
    try {
      await Itinerary.findOneAndRemove({ _id: req.params.id });
      res.json({ succes: true });
    } catch (e) {
      res.json({ success: false });
    }
  },
  getItinerariesPerCity: async (req, res) => {
    let itineraries = await Itinerary.find({ cityId: req.params.id });
    res.json({ success: true, response: itineraries });
  },
};

module.exports = itinerariesControllers;

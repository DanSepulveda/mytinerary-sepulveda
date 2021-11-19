const City = require("../models/City");

const citiesControllers = {
  getAllCities: async (req, res) => {
    try {
      let cities = await City.find();
      res.json({ success: true, response: cities });
    } catch (e) {
      res.json({ success: false });
    }
  },
  addNewCity: async (req, res) => {
    const cityToUpload = new City({
      name: req.body.name,
      prefecture: req.body.prefecture,
      region: req.body.region,
      description: req.body.description,
      src: req.body.src,
      src2: req.body.src2,
      src3: req.body.src3,
    });
    try {
      cityToUpload.save();
      res.json({ success: true });
    } catch (e) {
      res.json({ success: false });
    }
  },
  getOneCity: async (req, res) => {
    try {
      let gottenCity = await City.findOne({ _id: req.params.id });
      if (gottenCity) {
        res.json({ success: true, response: gottenCity });
      } else {
        throw new Error();
      }
    } catch (e) {
      res.json({ success: false, response: e.message });
    }
  },
  editOneCity: async (req, res) => {
    try {
      let edited = await City.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body.cityToEdit }
      );
      res.json({ response: edited });
    } catch (err) {
      res.json({ response: err.message });
    }
  },
  deleteOneCity: async (req, res) => {
    try {
      let deleted = await City.findOneAndRemove({ _id: req.params.id });
      if (deleted) {
        res.json({ response: "Deleted" });
      } else {
        throw new Error();
      }
    } catch (e) {
      res.json({ response: "Failed" });
    }
  },
};

module.exports = citiesControllers;

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
  getOneItinerary: async (req, res) => {
    try {
      let chosenItinerary = await Itinerary.findOne({ _id: req.params.id });
      if (chosenItinerary) {
        res.json({ success: true, response: chosenItinerary });
      } else {
        throw new Error();
      }
    } catch (e) {
      res.json({ success: false, response: e.message });
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
    try {
      let itineraries = await Itinerary.find({ cityId: req.params.id }).populate({ path: 'comments.userId', model: 'user' })
      res.json({ success: true, response: itineraries });
    } catch {
      res.json({ success: false });
    }
  },
  addComment: async (req, res) => {
    console.log('llego al controller')
    switch (req.body.type) {
      case 'add':
        const { comment } = req.body
        const { _id } = req.user
        try {
          let newComments = await Itinerary.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { "comments": { comment, userId: _id, date: new Date() } } },
            { new: true }
          ).populate({ path: 'comments.userId', model: 'user', select: 'firstName' })
          res.json({ success: true, response: { comments: newComments, user: _id } })
        } catch (e) {
          res.json({ success: false })
        }
      case 'delete':
        try {
          await Itinerary.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { "comments": { _id: req.body.commentId } } }
          )
          res.json({ success: true })
        } catch (e) {
          res.json({ success: false })
        }
    }
  },
  likeItinerary: async (req, res) => {
    console.log(req.user._id)
    const { _id } = req.user
    const { id } = req.params
    try {
      let itinerary = await Itinerary.findOne({ _id: id })
      // let condition = itinerary.likes.includes(_id) ? '$pull' : '$push'
      if (itinerary.likes.includes(_id)) {
        let modified = await Itinerary.findOneAndUpdate({ _id: id }, { $pull: { likes: _id } }, { new: true })
        res.json({ success: true, response: { likes: modified.likes, user: _id } })
      } else {
        let modified = await Itinerary.findOneAndUpdate({ _id: id }, { $push: { likes: _id } }, { new: true })
        res.json({ success: true, response: { likes: modified.likes, user: _id } })
      }
    } catch {
      console.log('catch')
    }
  }
};

module.exports = itinerariesControllers;

const express = require("express");
const citiesControllers = require("../controllers/citiesControllers");
const itineraryControllers = require("../controllers/itinerariesControllers");

const router = express.Router();

router
  .route("/cities")
  .get(citiesControllers.getAllCities)
  .post(citiesControllers.addNewCity);

router
  .route("/city/:id")
  .get(citiesControllers.getOneCity)
  .put(citiesControllers.editOneCity)
  .delete(citiesControllers.deleteOneCity);

router
  .route("/itineraries")
  .get(itineraryControllers.getAllItineraries)
  .post(itineraryControllers.addNewItinerary);

router
  .route("/itineraries/:id")
  .get(itineraryControllers.getItinerariesPerCity);

router
  .route("/itinerary/:id")
  .get(itineraryControllers.getOneItinerary)
  .delete(itineraryControllers.deleteOneItinerary)
  .put(itineraryControllers.editOneItinerary);

module.exports = router;

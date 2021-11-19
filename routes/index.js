const express = require("express");
const citiesControllers = require("../controllers/citiesControllers");
const itineraryControllers = require("../controllers/itinerariesControllers");
const userControllers = require("../controllers/usersControllers")
const activitiesControllers = require("../controllers/activitiesController")
const passport = require("passport")
const validator = require('../controllers/validator');

const router = express.Router();

// CITIES
router
  .route("/cities")
  .get(citiesControllers.getAllCities)
  .post(citiesControllers.addNewCity);

router
  .route("/city/:id")
  .get(citiesControllers.getOneCity)
  .put(citiesControllers.editOneCity)
  .delete(citiesControllers.deleteOneCity);

// ITINERARIES
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

router
  .route("/comments/:id")
  .put(passport.authenticate('jwt', { session: false }), itineraryControllers.addComment)

router
  .route("/likes/:id")
  .put(passport.authenticate('jwt', { session: false }), itineraryControllers.likeItinerary)

// ACTIVITIES
router
  .route("/activity")
  .post(activitiesControllers.addNewActivity)

router
  .route("/activities/:id")
  .get(activitiesControllers.getActivities)

// USERS
router
  .route("/user/signup")
  .post(validator, userControllers.addNewUser)

router
  .route("/user/login")
  .post(userControllers.verifyAccess)

router.route("/verifyToken")
  .get(passport.authenticate('jwt', { session: false }), userControllers.verifyToken)

module.exports = router;
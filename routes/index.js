const express = require("express");
const citiesControllers = require("../controllers/citiesControllers");
const itineraryControllers = require("../controllers/itinerariesControllers");
const userControllers = require("../controllers/usersControllers")
const activitiesControllers = require("../controllers/activitiesController")
const passport = require("passport")
const validator = require('../controllers/validator');

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

router
  .route("/activity")
  .post(activitiesControllers.addNewActivity)
  .put(activitiesControllers.editActivity)
  .delete(activitiesControllers.deleteActivity)

router
  .route("/activities/:id")
  .get(activitiesControllers.getActivities)

router
  .route("/comments/:id")
  .post(itineraryControllers.addComment)
// .put(itinerariesControllers.editComment)
// .delete(itinerariesControllers.deleteComment)

// router
//   .route("/likes/:id")
//   .put(passport.authenticate('jwt', { session: false }), itineraryControllers.likeItinerary)

router
  .route("/user/signup")
  .post(validator, userControllers.addNewUser)
router
  .route("/user/login")
  .post(userControllers.verifyAccess)
router.route("/verifyToken")
  .get(passport.authenticate('jwt', { session: false }), userControllers.verifyToken)

module.exports = router;
const express = require('express')
const citiesControllers = require('../controllers/citiesControllers') 
const itineraryControllers = require('../controllers/itinerariesControllers')

const router = express.Router()

router.route('/cities')
.get(citiesControllers.getAllCities)
.post(citiesControllers.addNewCity)

router.route('/city/:id')
.get(citiesControllers.getOneCity)
.put(citiesControllers.editOneCity)
.delete(citiesControllers.deleteOneCity)

router.route('/itineraries')
.get(itineraryControllers.getAllItineraries)
.post(itineraryControllers.addNewItinerary)

router.route('/itinerary/:id')
.delete(itineraryControllers.deleteOneItinerary)
module.exports = router
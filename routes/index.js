const express = require('express')
const citiesControllers = require('../controllers/citiesControllers') 

const router = express.Router()

router.route('/cities')
.get(citiesControllers.getAllCities)
.post(citiesControllers.addNewCity)

router.route('/cities/:id')
.get(citiesControllers.getOneCity)
// .put(citiesControllers.editOneCity)
.delete(citiesControllers.deleteOneCity)

module.exports = router
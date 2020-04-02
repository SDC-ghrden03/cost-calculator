const express = require('express');
const router = express.Router();
const controller = require('../controllers/locationControllers.js');
const controller = require('../controllers/carsControllers.js');



router.get('/:zipcode', controller.getZipcode)
router.get('/:id', controller.getCars);


module.exports = router;
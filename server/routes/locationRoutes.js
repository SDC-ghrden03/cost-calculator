const express = require('express');
const router = express.Router();
const controller = require('../controllers/locationControllers.js');

router.get('/:zipcode', controller.getZipcode)

module.exports = router;
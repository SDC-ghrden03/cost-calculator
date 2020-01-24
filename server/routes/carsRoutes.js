const express = require('express');
const router = express.Router();
const controller = require('../controllers/carsControllers.js');

router.get('/', controller.getCar);

module.exports = router;
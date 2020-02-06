const express = require('express');
const router = express.Router();
const controller = require('../controllers/carsControllers.js');

router.get('/:id', controller.getCars);

module.exports = router;
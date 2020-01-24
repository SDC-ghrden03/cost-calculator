const express = require('express');
const router = express.Router();
const controller = require('../controllers/locationcontrollers.js');

router.get('/', controller.getZipcode)

module.exports = router;
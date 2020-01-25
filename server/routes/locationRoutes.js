const express = require('express');
const router = express.Router();
const controller = require('../controllers/locationControllers.js');

router.get('/', controller.getZipcode)

module.exports = router;
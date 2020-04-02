const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.js');



router.get('/:zipcode', controller.getZipCode)
router.get('/:id', controller.getCars);











module.exports = router;
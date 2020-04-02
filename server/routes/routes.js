const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.js');



router.get('/:zipcode', controller.getZipcode)
router.get('/:id', controller.getCars);











module.exports = router;
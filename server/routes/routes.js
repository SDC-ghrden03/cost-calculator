const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.js');


// Fetch Request Handling
router.get('/:zipcode', controller.getZipCode)


//Route to Read
router.get('/:id', controller.getCars);


//Route to Create
router.post('/create', controller.addZipCode);


// //Route to Update
// router.put('/:id/update', controller.updateCars);


// //Route to Delete
// router.delete('/:id/delete', controller.deleteCars);











module.exports = router;
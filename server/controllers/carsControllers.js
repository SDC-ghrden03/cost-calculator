const model = require('../models/carsModels.js');

const getCars = (req, res, next) => {
  model.readCarPrice(req.body, (error, result) => {
    if (error) {
      console.log(error)
      res.status(400).send(error)
    } else {
      res.status(200).json({ car:result })
    }
  })
}


module.exports = {
  getCars
}
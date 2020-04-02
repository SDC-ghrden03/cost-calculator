const model = require('../models/locationModels.js');
const model = require('../models/carsModels.js');






const getZipcode = (req, res, next) => {
    console.log('params for location', req.params)
    model.getZipcodes(req.params.zipcode, (error, result) => {
        if (error) {
            console.log(error)
            res.status(400).send(error)
        } else {
            res.status(200).json({ creditScore:result })
        }
    })
}




const getCars = (req, res, next) => {
  console.log('params for car', req.params)
  model.readCarPrice(req.params.id, (error, result) => {
    if (error) {
      console.log(error)
      res.status(400).send(error)
    } else {
      res.status(200).json({ car:result })
    }
  })
}




module.exports = {
    getZipcode,
    getCars
}

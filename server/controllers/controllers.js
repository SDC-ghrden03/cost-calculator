const model = require('../models/models.js');
const redis = require('redis');
const bluebird = require('bluebird');


bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const PORT = process.env.PORT || 3002;

const REDIS_PORT = process.env.PORT || 6379; 
const client = redis.createClient(REDIS_PORT);

client.on("error", function(error) {
    console.error(error);
  });



const getZipCode = (req, res) => {
  const zip = req.params.zipcode
  model.getZipCodes(zip)
  .then(results => {
    client.setex(`${zip}`, 3600, JSON.stringify(results))
    res.status(201).json({ locations: results })
  })
  .catch(err => {
    res.status(400).json({
      message: 'Failed to get Zip yo!!!',
      err: err
    })
  })
};



const getCars = (req, res) => {
  const car = req.params.id; 
  model.readCarPrice(car);
  then(results => {
    res.status(200).json({ car:results })
  })
  .catch(err => {
    res.status(400).json({
      message: "Failed to get Car!",
      err: err
    });
  });
};



const addZipCode = (req, res) => {
  const newCode = req.params.zipcode;
  model.addZipCode(newCode)
  .then(results => {
    res.status(200).send("New ZipCode Successfully added!")
  })
  .catch(err => {
    res.status(400).json({
      message:'Failed to add ZipCode!!',
      err: err
    })
  })
}



const updateCars = (req, res) => {
  const newCar = req.params.newCar; 
  model.addNewCar(newCar)
  .then(results => {
    res.status(200).send('New Car Successfully added!');
  })
  .catch(err => {
    res.status(400).json({
      message:"Failed to add new Car!!",
      err: err
    })
  })
}



const deleteCars = (req, res) => {
  const removeCar = req.params.removeCar; 
  model.deleteCars(removeCar)
  .then(results => {
    res.status(200).send('Car successfuly Removed!')
  })
  .catch(err => {
    res.status(400).json({
      message: "Failed to delete Car!!",
      err: err
    })
  })
}





module.exports = {
    getZipCode,
    getCars, 
    addZipCode, 
    updateCars, 
    deleteCars
}

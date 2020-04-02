const model = require('../models/models.js');





const getZipCode = (req, res) => {
  const zip = req.params.zipcode
  model.getZipCodes(zip)
  .then(results => {
    res.status(201).json({ creditScore:results })
  })
  .catch(err => {
    res.status(400).json({
      message: 'Failed to get Zip!',
      err: err
    })
  })
}




// const getCars = (req, res, next) => {
//   console.log('params for car', req.params)
//   model.readCarPrice(req.params.id, (error, result) => {
//     if (error) {
//       console.log(error)
//       res.status(400).send(error)
//     } else {
//       res.status(200).json({ car:result })
//     }
//   })
// }

const getCars = () => {
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




module.exports = {
    getZipCode,
    getCars
}

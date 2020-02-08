const model = require('../models/locationModels.js');

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

module.exports = {
    getZipcode
}

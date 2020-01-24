const connection = require('../connections/costCalculatorConnections.js');

const readCarPrice = (body, callback) => {
    const queryText = `SELECT cost FROM cars WHERE id = ${body.id}`;
    connection.query(queryText, (error, result, field) => {
        if (error) {
            console.log(error)
            callback(error)
        } else {
            //error first... dont forget.
            callback(null, result)
        }
    })
}



module.exports = {
    readCarPrice
}
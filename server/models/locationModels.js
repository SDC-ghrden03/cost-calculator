const connection = require('../connections/costCalculatorConnections.js');
const connection = require('../connections/costCalculatorConnections.js');




const getZipcodes = (zipcode, callback) => {
    const queryText = `SELECT taxes, fees, rate FROM location WHERE zipcode = ${zipcode}`;
    connection.query(queryText, (error, result, field)=>{
        if (error) {
            console.log(error)
            callback(error);
        } else {
            callback(null, result)
        }
    })
}



const readCarPrice = (id, callback) => {
    const queryText = `SELECT cost FROM cars WHERE id = ${id}`;
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
    getZipcodes,
    readCarPrice   
}
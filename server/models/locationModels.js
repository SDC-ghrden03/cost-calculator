const connection = require('../connections/costCalculatorConnections.js');

const getZipcodes = (body, callback) => {
    const queryText = `SELECT credit_score FROM location WHERE zipcode = ${body.zipcode}`;
    connection.query(queryText, (error, result, field)=>{
        if (error) {
            console.log(error)
            callback(error);
        } else {
            callback(null, result)
        }
    })
}



module.exports = {
    getZipcodes    
}
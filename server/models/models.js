const connection = require('../connections/costCalculatorConnections.js');




const getZipCodes = (zip) => {
    return new Promise ((resolve, reject) => {
      const queryString = `SELECT taxes, fees, rate FROM location WHERE zipcode = ${zip}`;
      connection.query(queryString, (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    }; 



const readCarPrice = () => { 
    return new Promise ((resolve, reject) => {
        const queryText = `SELECT cost FROM cars WHERE id = ${id}`; 
        connection.query(queryText, (err, results, fields) => {
            if (err) {
            reject(err);
            } else {
            resolve(results);  
        }
      })
    });
  }







// const readCarPrice = (id, callback) => {
//     const queryText = `SELECT cost FROM cars WHERE id = ${id}`;
//     connection.query(queryText, (error, result, field) => {
//         if (error) {
//             console.log(error)
//             callback(error)
//         } else {
//             //error first... dont forget.
//             callback(null, result)
//         }
//     })
// }






module.exports = {
    getZipCodes,
    readCarPrice   
}
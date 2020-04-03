const pool = require('../connections/costCalculatorConnections.js');




const getZipCodes = (zip) => {
    return new Promise ((resolve, reject) => {
      const queryString = `SELECT taxes, fees, rate FROM location WHERE zipcode = ${zip}`;
      pool.query(queryString, (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    }; 



 const readCarPrice = (car) => { 
    return new Promise ((resolve, reject) => {
        const queryText = `SELECT cost FROM cars WHERE id = ${car}`; 
        pool.query(queryText, (err, results, fields) => {
            if (err) {
            reject(err);
            } else {
            resolve(results);  
        }
      });
    });
  };


//   const addZipCode = (newCode) => { 
//     return new Promise ((resolve, reject) => {
//         const queryText = `INSERT INTO location(zipcode) VALUES(${newCode})`; 
//         connection.query(queryText, (err, results, fields) => {
//             if (err) {
//             reject(err);
//             } else {
//             resolve(results);  
//         }
//       });
//     });
//   };


//   const addNewCar = (newcar) => { 
//     return new Promise ((resolve, reject) => {
//         const queryText = `INSERT INTO location(zipcode) VALUES(${newCar})`; 
//         connection.query(queryText, (err, results, fields) => {
//             if (err) {
//             reject(err);
//             } else {
//             resolve(results);  
//         }
//       });
//     });
//   };


//   const readCarPrice = (car) => { 
//     return new Promise ((resolve, reject) => {
//         const queryText = `SELECT cost FROM cars WHERE id = ${car}`; 
//         connection.query(queryText, (err, results, fields) => {
//             if (err) {
//             reject(err);
//             } else {
//             resolve(results);  
//         }
//       });
//     });
//   };







module.exports = {
    getZipCodes,
    readCarPrice
    // addZipCode,
    // addNewCar   
}
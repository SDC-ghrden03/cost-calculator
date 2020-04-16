
// const pool = require('../connections/costCalculatorConnections.js');
const eachLocation = require('../connections/costCalculatorConnections');





// MONGODB MODEL SETUP
const getZipCodes = (zip) => {
  return new Promise((resolve, reject) => {
      eachLocation.collection.findOne({ zip: `${zip}` }, (err, results) => {
      if(err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};


const addManyLocations = async (locationsBatch) => {
  return new Promise((resolve, reject) => {
    eachLocation.collection.insertMany(locationsBatch, (err, docs) => {
      if (err) {
        reject(err);
      } else {
        resolve(docs.length)
      }
    })
  })
};


// const addOneLocation = (location) => {
//   var newLocation = new eachLocation(location);
//   return new Promise((reject, resolve) => {
//     newLocation.save((err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(newLocation);
//       }
//     })
//   })
// };


// const getOneLocation = () => {
//   return new Promise((reject, resolve) => {
//     eachLocation.find((err, eachLocation) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(eachLocation);
//       }
//     })
//   })
// }



// POSTGRES MODEL SETUP
// const getZipCodes = (zip) => {
//   return new Promise ((resolve, reject) => {
//     const queryString = `SELECT id, creditscore FROM location WHERE zipcode = ${zip}`;
//     pool.query(queryString, (err, results, fields) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(results);
//       }
//     });
//   });
// }; 




//  const readCarPrice = (car) => { 
//     return new Promise ((resolve, reject) => {
//         const queryText = `SELECT cost FROM cars WHERE id = ${car}`; 
//         pool.query(queryText, (err, results, fields) => {
//             if (err) {
//             reject(err);
//             } else {
//             resolve(results);  
//         }
//       });
//     });
//   };


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
    addManyLocations
    // readCarPrice
    // addZipCode,
    // addNewCar   
}
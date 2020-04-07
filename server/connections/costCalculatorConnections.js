
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/price_information', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});


var db = mongoose.connection; 

db.on('error', console.error.bind(console, 'connectoin error:'));
db.once('open', function() {
  console.log('we are connected yo!');
})


const Schema = mongoose.Schema;


const locations = new Schema ({
  city: String, 
  zip: Number,
  interest: Number,
  cost: Number
})


const eachLocation = mongoose.model('eachLocation', locations) 



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



const addOneLocation = (location) => {
  var newLocation = new eachLocation(location);
  return new Promise((reject, resolve) => {
    newLocation.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(newLocation);
      }
    })
  })
};


const getOneLocation = () => {
  return new Promise((reject, resolve) => {
    eachLocation.find((err, eachLocation) => {
      if (err) {
        reject(err);
      } else {
        resolve(eachLocation);
      }
    })
  })
}


module.exports = {
  addManyLocations, 
  addOneLocation, 
  getOneLocation
}










// const Pool = require('pg').Pool; 
// require('dotenv').config()



// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: 'cost_calculator',
//   password: process.env.DB_PASS,
//   port: 5432
// });




// module.exports = pool;





// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'cost_calculator'
// })

// connection.connect((err)=>{
//   if (err) {
//     console.error('error connecting:' + err.stack)
//     return
//   }
//   console.log('Connected to as id: ' + connection.threadId)
// });



// module.exports = connection;
// require('newrelic');

//add this require to ensure .env file works
require('dotenv').config();
const express = require('express');
const app = express();
const Routes = require('./routes/routes.js');
const cors = require('cors');
const controllers = require('./controllers/controllers.js')


const PORT = process.env.PORT || 3002;


// const REDIS_PORT = process.env.REDIS_PORT || 6379; 
// const client = redis.createClient({
//   host: 'redis',
//   port: REDIS_PORT
// });

// // const client = redis.createClient('redis://0.0.0.0:6379');

// client.on("error", function(error) {
//     console.error(error);
//   });



//Middleware
app.use(express.json())
app.use(cors())
app.use(express.static('client/dist'))




//cache middleware
const cache = (req, res, next) => {

  const zip = req.params.zipcode
  
  controllers.client.get(`${zip}`, (err, data) => {
    if (err) throw err; 

    if (data !== null) {
        res.send(setResponse(zip,data))
    } else {
        next();
    }
  })
};


// app.use('/api/cars', Routes);
app.use('/api/location', cache, Routes)
// app.use('/api/crud', Routes)







app.listen(PORT, ()=>{ console.log(`server running on PORT: ${PORT}`)})

module.exports = { 
  
}

//add this require to ensure .env file works
require('dotenv').config();

const express = require('express');
const app = express();
const Routes = require('./routes/routes.js');
const cors = require('cors');


//Middleware
app.use(express.json())
app.use(cors())
app.use(express.static('client/dist'))
//if PORT exists in our enviornment, set PORT to our enviornment for us. else, set it to 3000



app.use('/api/cars', Routes);
app.use('/api/location', Routes)
app.use('/api/crud', Routes)





const PORT = process.env.PORT || 3002;

app.listen(PORT, ()=>{ console.log(`server running on PORT: ${PORT}`)})

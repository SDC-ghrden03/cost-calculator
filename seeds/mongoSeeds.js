const { addManyLocations} = require('../server/models/models.js');
const faker = require('faker');




const fakeLocation = () => {
    const location = {};
    location.city = faker.address.city()
    location.zip = faker.address.zipCode().substr(0, 5);
    location.interest = faker.finance.amount(0, 10, 2)
    location.cost = faker.random.number({
      'min': 1000,
      'max': 75000
    })
  return location;   
}


const fakeLocationsBatch = (num) => {
  const locations = []; 
  for (let i = 0; i < num; i++) {
    let newLocation = fakeLocation(); 
    locations.push(newLocation);
  }
  return locations;   
}


const seedLocationsBatches = async (num) => {
  var count = 0; 
  while (count < num) {
  const seedBatches = fakeLocationsBatch(10000);
  await addManyLocations(seedBatches);
  count++
  }
};


seedLocationsBatches(1000);





module.exports = {
    fakeLocation
}
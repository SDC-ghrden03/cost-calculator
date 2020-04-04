const faker = require('faker');



function createData() {
  var fakeLocations = [];
  while (fakeLocations.length < 10000) {
    fakeLocations.push({
      zipcode: faker.address.zipCode().substr(0,5),
      creditscore: faker.finance.amount(0, 10, 2)
    }) 
  }
 return fakeLocations;
};


exports.seed = async function(knex) {
  var count = 0;
  while (count < 1000) {
    var fakeLocations = createData()
    await knex('location').insert(fakeLocations)
    count++
  }
};

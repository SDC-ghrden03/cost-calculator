const faker = require('faker');



const createCost = () => {
  var fakeCosts = [];
  while (fakeCosts.length < 10000) {
    fakeCosts.push({
      price: faker.random.number({
        'min':1000,
        'max':50000
      })
    })
  }
  return fakeCosts; 
};


exports.seed = async function(knex) {
  var count = 0; 
  while (count < 1000) {
    var fakeCosts = createCost();
    await knex('cars').insert(fakeCosts);
    count++
  }   
};

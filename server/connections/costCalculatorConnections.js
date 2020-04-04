
const Pool = require('pg').Pool; 
require('dotenv').config()



const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'cost_calculator',
  password: process.env.DB_PASS,
  port: 5432
});




module.exports = pool;


















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

const Pool = require('pg').Pool; 



const pool = new Pool({
  user: 'dev',
  host: 'localhost',
  database: 'cost_calculator',
  password: 'devOps',
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
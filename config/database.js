const mysql = require('mysql2');
var env = 'dev';
 
// create the connection to database
var dev = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'connectify'
}

var prod = {
	host: 'localhost',
	user: 'root',
	password: 'a',
	database: 'connectify'
}



const connection = mysql.createConnection({
  host: dev.host,
  user: dev.user,
  database: dev.database,
  password: dev.password
});

const pool = mysql.createPool({
  connectionLimit: 10,
  host: dev.host,
  user: dev.user,
  database: dev.database,
  password: dev.password,
  waitForConnections: true,
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})

module.exports = {
	connection: connection,
	pool: pool
};
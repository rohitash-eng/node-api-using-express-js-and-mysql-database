const mysql = require('mysql2');

// Create a pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '********',     // Replace with your MySQL password
  database: 'nodeApiUsingExpressMysqlDB',     // Replace with your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Check initial connection status
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ MySQL Connection Failed:', err.message);
  } else {
    console.log('✅ MySQL Connected Successfully!');
    connection.release(); // Important: release connection back to pool
  }
});

module.exports = pool.promise(); // Export with promise support for async/await

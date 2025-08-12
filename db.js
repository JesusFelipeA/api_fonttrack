const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'fonttrack.cvoew60o2qtr.us-east-2.rds.amazonaws.com',
  user: 'jesusadmin',
  password: 'jesus123',
  database: 'fonttrack'
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

module.exports = connection;
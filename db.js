// Librería para establecer conexión con MySQL
const mysql = require('mysql2');

// Configuración de conexión a la base de datos
const connection = mysql.createConnection({
   host: '',        // Dirección del servidor (ej: localhost)
   user: '',        // Usuario de la base de datos
   password: '',    // Contraseña del usuario
   database: ''     // Nombre de la base de datos
 });

// Conectar a la base de datos
connection.connect((err) => {
  // Si hay error, mostrarlo en consola
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  
  // Si la conexión es exitosa, mostrar mensaje
  console.log('Conexión a la base de datos exitosa');
});

// Exportar la conexión para usarla en otros archivos
module.exports = connection;

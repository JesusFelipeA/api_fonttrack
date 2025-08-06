📦 Fontrack API
Fontrack API es un sistema backend desarrollado en Node.js con Express.js y MySQL, diseñado para gestionar usuarios, materiales y lugares. Proporciona una API RESTful con operaciones CRUD completas.
🔧 Requisitos
- Node.js (v22.13.0 o superior)
- MySQL
- npm (incluido con Node.js)
🚀 Instalación
1. Clona este repositorio y entra en el directorio del proyecto:
   git clone https://github.com/JesusFelipeA/fontrack_api.git
   cd fontrack_api/api

2. Instala las dependencias necesarias:
   npm install
🛠 Configuración de la Base de Datos
Configura tu conexión en db.js:

        const mysql = require('mysql');

        const connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'inventario2'
        });

        connection.connect((err) => {
          if (err) {
            console.error('Error de conexión a la base de datos:', err);
            return;
          }
          console.log('Conexión a la base de datos exitosa');
        });

        module.exports = connection;
        
🌐 API REST - Endpoints

📌 Usuarios (/usuarios):

GET    /api/usuarios         → Obtener todos los usuarios

GET    /api/usuarios/:id     → Obtener un usuario por ID

POST   /api/usuarios         → Crear un nuevo usuario

PUT    /api/usuarios/:id     → Actualizar un usuario

DELETE /api/usuarios/:id     → Eliminar un usuario

📌 Materiales (/materiales):

GET    /api/materiales         → Obtener todos los materiales

GET    /api/materiales/:id     → Obtener un material por ID

POST   /api/materiales         → Crear un nuevo material

PUT    /api/materiales/:id     → Actualizar un material

DELETE /api/materiales/:id     → Eliminar un material

📌 Lugares (/lugares):

GET    /api/lugares         → Obtener todos los lugares

GET    /api/lugares/:id     → Obtener un lugar por ID

POST   /api/lugares         → Crear un nuevo lugar

PUT    /api/lugares/:id     → Actualizar un lugar

DELETE /api/lugares/:id     → Eliminar un lugar

🔐 Middleware y Seguridad
Middleware para permitir CORS:

        app.use((req, res, next) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
          next();
        });
        
🚀 Ejecución del Servidor
Para iniciar el servidor:
npm start

El servidor estará disponible en:
http://localhost:3000
🧪 Pruebas con Postman o Curl
Puedes probar la API con Postman o curl. Ejemplo:
curl -X GET http://localhost:3000/api/usuarios
"# api_fonttrack" 
"# api_fonttrack" 

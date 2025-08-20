// Importar Express para crear el servidor
const express = require('express');
const app = express();

// Importar body-parser para manejar datos JSON
const bodyParser = require('body-parser');

// Importar las rutas de la aplicación
const routes = require('./routes');

// Importar CORS para permitir peticiones desde diferentes dominios
const cors = require('cors');

// Habilitar CORS para todas las rutas
app.use(cors());

// Configurar body-parser para leer datos JSON del body de las peticiones
app.use(bodyParser.json());

// Middleware personalizado para configurar cabeceras CORS manualmente
app.use((req, res, next) => {
  // Permitir peticiones desde cualquier origen
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Métodos HTTP permitidos
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
  // Cabeceras permitidas en las peticiones
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Continuar al siguiente middleware
  next();
});

// Configurar todas las rutas de la API bajo el prefijo '/api'
app.use('/api', routes);

// Definir el puerto del servidor (usar variable de entorno o puerto 3000 por defecto)
const PORT = process.env.PORT || 3000;

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor API a la espera de consulta, por el puerto ${PORT}`);
});

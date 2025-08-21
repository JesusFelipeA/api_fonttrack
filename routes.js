// routes.js
// Importar Express y crear router
const express = require('express');
const router = express.Router();

// Importar conexión a la base de datos
const connection = require('./db');

// Importar bcrypt para manejar contraseñas encriptadas
const bcrypt = require('bcryptjs');

//----------- USUARIOS -------------

// Obtener todos los usuarios
router.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM tb_users', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

// Obtener un usuario específico por ID
router.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM tb_users WHERE id_usuario = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    // Si no encuentra el usuario, devolver error 404
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Crear un nuevo usuario
router.post('/usuarios', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO tb_users SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

// Actualizar un usuario existente
router.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE tb_users SET ? WHERE id_usuario = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

// Eliminar un usuario
router.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM tb_usuarios WHERE id_usuario = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});

//----------- MATERIALES -------------

// Obtener todos los materiales
router.get('/materiales', (req, res) => {
  connection.query('SELECT * FROM tb_materiales', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

// Obtener un material específico por ID
router.get('/materiales/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM tb_materiales WHERE id_material = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Crear un nuevo material
router.post('/materiales', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO tb_materiales SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

// Actualizar un material existente
router.put('/materiales/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE tb_materiales SET ? WHERE id_material = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

// Eliminar un material
router.delete('/materiales/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM tb_materiales WHERE id_material = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});

//----------- LUGARES -------------

// Obtener todos los lugares
router.get('/lugares', (req, res) => {
  connection.query('SELECT * FROM tb_lugares', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

// Obtener un lugar específico por ID
router.get('/lugares/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM tb_lugares WHERE id_lugar = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Crear un nuevo lugar
router.post('/lugares', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO tb_lugares SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

// Actualizar un lugar existente
router.put('/lugares/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE tb_lugares SET ? WHERE id_lugar = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

// Eliminar un lugar
router.delete('/lugares/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM tb_lugares WHERE id_lugar = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});

// ---------- LOGIN ----------

// Autenticación de usuarios
router.post('/login', (req, res) => {
  const { correo, password } = req.body;

  // Buscar usuario en la base de datos por correo
  connection.query('SELECT * FROM tb_users WHERE correo = ?', [correo], async (err, results) => {
    if (err) {
      console.error('Error al buscar el usuario:', err);
      return res.status(500).json({ error: 'Error del servidor' });
    }

    // Si no existe el usuario
    if (results.length === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const usuario = results[0];

    // Verificar la contraseña usando bcrypt
    const passwordValida = await bcrypt.compare(password, usuario.password);

    if (!passwordValida) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Login exitoso
    res.json({ mensaje: 'Login exitoso', usuario });
  });
});

//----------- NOTIFICACIONES/FALLAS -------------

// Obtener todas las notificaciones ordenadas por fecha
router.get('/notificaciones', (req, res) => {
  connection.query('SELECT * FROM tb_fallas ORDER BY created_at DESC', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

// Obtener una falla específica por ID
router.get('/fallas/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM tb_notificaciones WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Crear una nueva falla/notificación
router.post('/fallas', (req, res) => {
  console.log('=== DATOS RECIBIDOS (PARA tb_notificaciones REAL) ===');
  console.log(req.body);

  // Extraer datos del body de la petición
  const { 
    eco, placas, descripcion, observaciones, id_lugar, 
    material, marca, anio, km, fecha, nombre_conductor,
    reviso_por, autorizado_por, materials, cantidad,
  } = req.body;

  // Función para validar strings de forma segura
  const safeString = (value) => {
    if (value === null || value === undefined) return null;
    if (typeof value === 'string') return value.trim();
    return String(value).trim();
  };

  // Función para validar números de forma segura
  const safeNumber = (value) => {
    if (value === null || value === undefined || value === '') return null;
    const num = parseInt(value);
    return isNaN(num) ? null : num;
  };

  // Validar que los campos requeridos estén presentes
  if (!eco || !placas || !descripcion || !observaciones || !id_lugar) {
    console.log('❌ Validación fallida - campos faltantes');
    return res.status(400).json({
      error: 'Faltan campos requeridos: eco, placas, descripcion, observaciones, id_lugar',
      campos_faltantes: {
        eco: !eco,
        placas: !placas,
        descripcion: !descripcion,
        observaciones: !observaciones,
        id_lugar: !id_lugar
      }
    });
  }

  // Validar que id_lugar sea un número válido
  const idLugarNum = safeNumber(id_lugar);
  if (!idLugarNum || idLugarNum <= 0) {
    console.log('❌ id_lugar inválido:', id_lugar);
    return res.status(400).json({
      error: `id_lugar debe ser un número válido mayor a 0. Recibido: "${id_lugar}"`
    });
  }

  // Buscar un usuario válido para asociar la falla
  console.log('🔍 Buscando usuario para usuario_reporta_id...');
  
  connection.query('SELECT id_usuario, nombre, correo FROM tb_users LIMIT 1', (err, usuarios) => {
    if (err) {
      console.error('❌ Error al buscar usuarios:', err);
      return res.status(500).json({
        error: 'Error al buscar usuarios en la base de datos',
        mensaje: err.sqlMessage
      });
    }

    // Verificar que exista al menos un usuario
    if (usuarios.length === 0) {
      console.log('❌ No hay usuarios en tb_users');
      return res.status(400).json({
        error: 'No hay usuarios disponibles. Debes crear al menos un usuario primero.',
        solucion: 'Ejecuta: INSERT INTO tb_users (nombre, correo, password) VALUES ("Sistema", "sistema@empresa.com", "password123");'
      });
    }

    const usuarioReporta = usuarios[0];
    console.log('✅ Usuario encontrado para reportar:', usuarioReporta);

    // Verificar que el lugar existe en la base de datos
    console.log('🔍 Verificando que el lugar existe:', idLugarNum);
    
    connection.query('SELECT * FROM tb_lugares WHERE id_lugar = ?', [idLugarNum], (err, lugares) => {
      if (err) {
        console.error('❌ Error al verificar lugar:', err);
        return res.status(500).json({
          error: 'Error al verificar el lugar en la base de datos',
          mensaje: err.sqlMessage
        });
      }

      // Verificar que el lugar existe
      if (lugares.length === 0) {
        console.log('❌ Lugar no encontrado:', idLugarNum);
        return res.status(400).json({
          error: `El lugar con ID ${idLugarNum} no existe en tb_lugares`
        });
      }

      const lugarEncontrado = lugares[0];
      console.log('✅ Lugar verificado:', lugarEncontrado);

      // Preparar objeto con todos los datos para insertar
      const nuevaNotificacion = {
        // Información básica del vehículo
        id_lugar: idLugarNum,
        eco: safeString(eco),
        placas: safeString(placas) ? safeString(placas).toUpperCase() : null,
        marca: safeString(marca),
        anio: safeString(anio),
        km: safeString(km),
        fecha: safeString(fecha),
        nombre_conductor: safeString(nombre_conductor),
        descripcion: safeString(descripcion),
        observaciones: safeString(observaciones),
        
        // Usuario que reporta la falla
        usuario_reporta_id: usuarioReporta.id_usuario,
        nombre_usuario_reporta: safeString(usuarioReporta.nombre),
        correo_usuario_reporta: safeString(usuarioReporta.correo),
        
        // Información de materiales
        material: safeString(material),
        cantidad: safeNumber(cantidad) || 0,
        materials: materials && Array.isArray(materials) && materials.length > 0 
          ? JSON.stringify(materials) 
          : null,
        
        // Correo de destino
        correo_destino: safeString(usuarioReporta.correo),
        
        // Estado inicial de la notificación
        estado: 'pendiente',
        
        // Campos de autorización opcionales
        autorizado_por: safeString(autorizado_por),
        reviso_por: safeString(reviso_por),
        
        // Campos de aprobación que se llenan después
        usuario_aprueba_id: null,
        nombre_usuario_aprueba: null,
        correo_usuario_aprueba: null,
        fecha_aprobacion: null,
        comentarios_admin: null
      };

      console.log('=== DATOS PREPARADOS PARA tb_notificaciones (ESTRUCTURA REAL) ===');
      console.log(nuevaNotificacion);

      // Insertar la nueva notificación en la base de datos
      connection.query('INSERT INTO tb_notificaciones SET ?', nuevaNotificacion, (err, results) => {
        if (err) {
          console.error('❌ ERROR SQL al insertar notificación:', err.code);
          console.error('❌ MENSAJE:', err.sqlMessage);
          console.error('❌ QUERY:', err.sql);

          // Manejar diferentes tipos de errores SQL
          let errorMessage = 'Error al crear la notificación';
          let solucion = '';
          
          if (err.code === 'ER_NO_REFERENCED_ROW_2') {
            errorMessage = 'Error de foreign key: El usuario_reporta_id no existe en tb_users';
            solucion = 'Verificar que exista al menos un usuario en tb_users';
          } else if (err.code === 'ER_BAD_FIELD_ERROR' || err.code === 'ER_UNKNOWN_COLUMN') {
            errorMessage = `Columna no encontrada: ${err.sqlMessage}`;
            solucion = 'Verificar que la estructura de tb_notificaciones coincida';
          } else if (err.code === 'ER_NO_DEFAULT_FOR_FIELD') {
            errorMessage = `Campo requerido faltante: ${err.sqlMessage}`;
            solucion = 'Verificar las columnas requeridas en tb_notificaciones';
          } else if (err.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD') {
            errorMessage = 'Error en formato de fecha o valor inválido';
            solucion = 'Verificar que la fecha esté en formato YYYY-MM-DD';
          }

          res.status(500).json({
            error: errorMessage,
            codigo: err.code,
            mensaje: err.sqlMessage,
            solucion: solucion,
            campos_intentados: Object.keys(nuevaNotificacion),
            usuario_usado: usuarioReporta,
            lugar_usado: lugarEncontrado
          });
          return;
        }

        console.log('✅ NOTIFICACIÓN CREADA EXITOSAMENTE EN ESTRUCTURA REAL');
        console.log('   - ID de notificación:', results.insertId);

        // Respuesta exitosa
        res.status(201).json({
          message: 'Notificación de falla creada exitosamente',
          id_notificacion: results.insertId,
          estado: 'pendiente',
          data: {
            id_notificacion: results.insertId,
            eco: nuevaNotificacion.eco,
            placas: nuevaNotificacion.placas,
            marca: nuevaNotificacion.marca,
            anio: nuevaNotificacion.anio,
            descripcion: nuevaNotificacion.descripcion,
            estado: nuevaNotificacion.estado,
            usuario_reporta: {
              id: nuevaNotificacion.usuario_reporta_id,
              nombre: nuevaNotificacion.nombre_usuario_reporta,
              correo: nuevaNotificacion.correo_usuario_reporta
            },
            lugar_info: {
              id_lugar: lugarEncontrado.id_lugar,
              nombre: lugarEncontrado.nombre
            },
            fecha_creacion: new Date().toISOString()
          }
        });
      });
    });
  });
});

// Eliminar una falla
router.delete('/fallas/:id', (req, res) => {
  const id = req.params.id;

  // Verificar que la falla existe antes de eliminarla
  connection.query('SELECT * FROM tb_notificaciones WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error al buscar el registro:', err);
      return res.status(500).json({ error: 'Error al buscar el registro' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }

    // Eliminar la falla
    connection.query('DELETE FROM tb_notificaciones WHERE id = ?', [id], (err, deleteResults) => {
      if (err) {
        console.error('Error al eliminar la falla:', err);
        return res.status(500).json({ error: 'Error al eliminar la falla' });
      }

      res.json({
        message: 'Falla eliminada exitosamente',
        id_falla: id
      });
    });
  });
});

// Buscar fallas con filtros específicos
router.get('/fallas/buscar', (req, res) => {
  const { eco, placas, marca, conductor, fecha_desde, fecha_hasta } = req.query;

  // Construir query dinámico basado en los filtros recibidos
  let query = 'SELECT * FROM tb_fallas WHERE 1=1';
  let params = [];

  // Agregar filtros si están presentes
  if (eco) {
    query += ' AND eco LIKE ?';
    params.push(`%${eco}%`);
  }

  if (placas) {
    query += ' AND placas LIKE ?';
    params.push(`%${placas}%`);
  }

  if (marca) {
    query += ' AND marca LIKE ?';
    params.push(`%${marca}%`);
  }

  if (conductor) {
    query += ' AND conductor LIKE ?';
    params.push(`%${conductor}%`);
  }

  if (fecha_desde) {
    query += ' AND fecha >= ?';
    params.push(fecha_desde);
  }

  if (fecha_hasta) {
    query += ' AND fecha <= ?';
    params.push(fecha_hasta);
  }

  // Ordenar por fecha más reciente
  query += ' ORDER BY created_at DESC';

  // Ejecutar la búsqueda
  connection.query(query, params, (err, results) => {
    if (err) {
      console.error('Error al buscar registros:', err);
      res.status(500).json({ error: 'Error al buscar registros' });
      return;
    }
    res.json(results);
  });
});

// Exportar el router para uso en el archivo principal
module.exports = router;

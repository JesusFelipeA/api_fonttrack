// routes.js
const express = require('express');
const router = express.Router();
const connection = require('./db');
const bcrypt = require('bcryptjs'); // Asegúrate de tener esta línea arriba

//----------- USUARIOS -------------
// Obtener todos los registros de tb_users
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

// Obtener un registro de tb_users por su ID
router.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM tb_users WHERE id_usuario = ?', id, (err, results) => {
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

// Crear un nuevo registro en tb_users
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

// Actualizar un registro en tb_users
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

// Eliminar un registro en tb_users
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
// Obtener todos los registros de tb_materiales
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

// Obtener un registro de tb_materiales por su ID
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

// Crear un nuevo registro en tb_materiales
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

// Actualizar un registro en tb_materiales
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

// Eliminar un registro en tb_materiales
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
// Obtener todos los registros de tb_lugares
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

// Obtener un registro de tb_lugares por su ID
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

// Crear un nuevo registro en tb_lugares
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

// Actualizar un registro en tb_lugares
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

// Eliminar un registro en tb_lugares
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
router.post('/login', (req, res) => {
  const { correo, password } = req.body;

  // Buscar al usuario por correo
  connection.query('SELECT * FROM tb_users WHERE correo = ?', [correo], async (err, results) => {
    if (err) {
      console.error('Error al buscar el usuario:', err);
      return res.status(500).json({ error: 'Error del servidor' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const usuario = results[0];

    // Comparar contraseña ingresada con la hash de la BD
    const passwordValida = await bcrypt.compare(password, usuario.password);

    if (!passwordValida) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Si todo está bien
    res.json({ mensaje: 'Login exitoso', usuario });
  });
});

// Obtener todos los registros de tb_fallas
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

// Obtener un registro de tb_fallas por su ID
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

// Crear un nuevo registro en tb_fallas
router.post('/fallas', (req, res) => {
  console.log('=== DATOS RECIBIDOS (PARA tb_notificaciones REAL) ===');
  console.log(req.body);

  const { 
    eco, placas, descripcion, observaciones, id_lugar, 
    material, marca, anio, km, fecha, nombre_conductor,
    reviso_por, autorizado_por, materials, cantidad,
  } = req.body;

  const safeString = (value) => {
    if (value === null || value === undefined) return null;
    if (typeof value === 'string') return value.trim();
    return String(value).trim();
  };

  const safeNumber = (value) => {
    if (value === null || value === undefined || value === '') return null;
    const num = parseInt(value);
    return isNaN(num) ? null : num;
  };

  // VALIDACIÓN DE CAMPOS REQUERIDOS
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

  const idLugarNum = safeNumber(id_lugar);
  if (!idLugarNum || idLugarNum <= 0) {
    console.log('❌ id_lugar inválido:', id_lugar);
    return res.status(400).json({
      error: `id_lugar debe ser un número válido mayor a 0. Recibido: "${id_lugar}"`
    });
  }

  // BUSCAR UN USUARIO VÁLIDO PARA usuario_reporta_id
  console.log('🔍 Buscando usuario para usuario_reporta_id...');
  
  connection.query('SELECT id_usuario, nombre, correo FROM tb_users LIMIT 1', (err, usuarios) => {
    if (err) {
      console.error('❌ Error al buscar usuarios:', err);
      return res.status(500).json({
        error: 'Error al buscar usuarios en la base de datos',
        mensaje: err.sqlMessage
      });
    }

    if (usuarios.length === 0) {
      console.log('❌ No hay usuarios en tb_users');
      return res.status(400).json({
        error: 'No hay usuarios disponibles. Debes crear al menos un usuario primero.',
        solucion: 'Ejecuta: INSERT INTO tb_users (nombre, correo, password) VALUES ("Sistema", "sistema@empresa.com", "password123");'
      });
    }

    const usuarioReporta = usuarios[0];
    console.log('✅ Usuario encontrado para reportar:', usuarioReporta);

    // VERIFICAR QUE EL LUGAR EXISTE
    console.log('🔍 Verificando que el lugar existe:', idLugarNum);
    
    connection.query('SELECT * FROM tb_lugares WHERE id_lugar = ?', [idLugarNum], (err, lugares) => {
      if (err) {
        console.error('❌ Error al verificar lugar:', err);
        return res.status(500).json({
          error: 'Error al verificar el lugar en la base de datos',
          mensaje: err.sqlMessage
        });
      }

      if (lugares.length === 0) {
        console.log('❌ Lugar no encontrado:', idLugarNum);
        return res.status(400).json({
          error: `El lugar con ID ${idLugarNum} no existe en tb_lugares`
        });
      }

      const lugarEncontrado = lugares[0];
      console.log('✅ Lugar verificado:', lugarEncontrado);

      // PREPARAR DATOS PARA INSERTAR EN tb_notificaciones (ESTRUCTURA REAL)
      const nuevaNotificacion = {
        // Campos básicos de la falla
        id_lugar: idLugarNum,
        eco: safeString(eco),
        placas: safeString(placas) ? safeString(placas).toUpperCase() : null,
        marca: safeString(marca),
        anio: safeString(anio), // En tu tabla es 'anio', no 'ano'
        km: safeString(km),
        fecha: safeString(fecha), // Formato DATE
        nombre_conductor: safeString(nombre_conductor),
        descripcion: safeString(descripcion),
        observaciones: safeString(observaciones),
        
        // Usuario que reporta (obligatorio por foreign key)
        usuario_reporta_id: usuarioReporta.id_usuario,
        nombre_usuario_reporta: safeString(usuarioReporta.nombre),
        correo_usuario_reporta: safeString(usuarioReporta.correo),
        
        // Material
        material: safeString(material),
        cantidad: safeNumber(cantidad) || 0,
        materials: materials && Array.isArray(materials) && materials.length > 0 
          ? JSON.stringify(materials) 
          : null,
        
        // Correo destino (opcional)
        correo_destino: safeString(usuarioReporta.correo), // Usar el mismo usuario por defecto
        
        // Estado inicial
        estado: 'pendiente', // ENUM: pendiente, aprobada, rechazada
        
        // Campos de autorización (opcionales)
        autorizado_por: safeString(autorizado_por),
        reviso_por: safeString(reviso_por),
        
        // Campos de aprobación (null inicialmente)
        usuario_aprueba_id: null,
        nombre_usuario_aprueba: null,
        correo_usuario_aprueba: null,
        fecha_aprobacion: null,
        comentarios_admin: null
      };

      console.log('=== DATOS PREPARADOS PARA tb_notificaciones (ESTRUCTURA REAL) ===');
      console.log(nuevaNotificacion);

      // INSERTAR EN tb_notificaciones
      connection.query('INSERT INTO tb_notificaciones SET ?', nuevaNotificacion, (err, results) => {
        if (err) {
          console.error('❌ ERROR SQL al insertar notificación:', err.code);
          console.error('❌ MENSAJE:', err.sqlMessage);
          console.error('❌ QUERY:', err.sql);

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
// Eliminar un registro en tb_fallas
router.delete('/fallas/:id', (req, res) => {
  const id = req.params.id;

  // Verificar que el registro existe antes de eliminar
  connection.query('SELECT * FROM tb_notificaciones WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error al buscar el registro:', err);
      return res.status(500).json({ error: 'Error al buscar el registro' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }

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

// NUEVO: Buscar fallas con filtros
router.get('/fallas/buscar', (req, res) => {
  const { eco, placas, marca, conductor, fecha_desde, fecha_hasta } = req.query;

  let query = 'SELECT * FROM tb_fallas WHERE 1=1';
  let params = [];

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

  query += ' ORDER BY created_at DESC';

  connection.query(query, params, (err, results) => {
    if (err) {
      console.error('Error al buscar registros:', err);
      res.status(500).json({ error: 'Error al buscar registros' });
      return;
    }
    res.json(results);
  });
});



module.exports = router;
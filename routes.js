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

//----------- ENTREGAS -------------

// Obtener todos los registros de tb_entregas
router.get('/entregas', (req, res) => {
  connection.query('SELECT * FROM tb_entregas', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

// Obtener un registro de tb_entregas por su ID
router.get('/entregas/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM tb_entregas WHERE id_entrega = ?', id, (err, results) => {
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

// Crear un nuevo registro en tb_entregas
router.post('/entregas', (req, res) => {
  const nuevaEntrega = req.body;
  connection.query('INSERT INTO tb_entregas SET ?', nuevaEntrega, (err, results) => {
    if (err) {
      console.error('Error al crear una nueva entrega:', err);
      res.status(500).json({ error: 'Error al crear una nueva entrega' });
      return;
    }
    res.status(201).json({ message: 'Entrega creada exitosamente' });
  });
});

// Actualizar un registro en tb_entregas
router.put('/entregas/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE tb_entregas SET ? WHERE id_entrega = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar la entrega:', err);
      res.status(500).json({ error: 'Error al actualizar la entrega' });
      return;
    }
    res.json({ message: 'Entrega actualizada exitosamente' });
  });
});

// Eliminar un registro en tb_entregas
router.delete('/entregas/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM tb_entregas WHERE id_entrega = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar la entrega:', err);
      res.status(500).json({ error: 'Error al eliminar la entrega' });
      return;
    }
    res.json({ message: 'Entrega eliminada exitosamente' });
  });
});

//----------- FALLAS MEJORADOS -------------

// Obtener todos los registros de tb_fallas
router.get('/fallas', (req, res) => {
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
  connection.query('SELECT * FROM tb_fallas WHERE id = ?', [id], (err, results) => {
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
  console.log('=== DATOS RECIBIDOS ===');
  console.log(req.body);

  const { eco, placas, descripcion, observaciones, id_lugar } = req.body;

  // Validar campos básicos INCLUYENDO id_lugar (ahora es requerido)
  if (!eco || !placas || !descripcion || !observaciones || !id_lugar) {
    console.log('❌ Validación fallida - campos faltantes');
    console.log('Campos recibidos:', { eco: !!eco, placas: !!placas, descripcion: !!descripcion, observaciones: !!observaciones, id_lugar: !!id_lugar });
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
  const idLugarNum = parseInt(id_lugar);
  if (isNaN(idLugarNum) || idLugarNum <= 0) {
    console.log('❌ id_lugar inválido:', id_lugar);
    return res.status(400).json({
      error: `id_lugar debe ser un número válido mayor a 0. Recibido: "${id_lugar}"`
    });
  }

  console.log('🔍 Verificando que el lugar existe:', idLugarNum);

  // Verificar que el lugar existe en tb_lugares
  connection.query('SELECT * FROM tb_lugares WHERE id_lugar = ?', [idLugarNum], (err, lugares) => {
    if (err) {
      console.error('❌ Error al verificar lugar:', err);
      return res.status(500).json({
        error: 'Error al verificar el lugar en la base de datos',
        mensaje: err.sqlMessage,
        codigo: err.code
      });
    }

    if (lugares.length === 0) {
      console.log('❌ Lugar no encontrado:', idLugarNum);
      
      // Obtener lugares disponibles para mostrar en el error
      connection.query('SELECT id_lugar, nombre FROM tb_lugares ORDER BY id_lugar', (err2, lugaresDisponibles) => {
        let lugaresTexto = 'No se pudieron obtener los lugares disponibles';
        if (!err2 && lugaresDisponibles.length > 0) {
          lugaresTexto = lugaresDisponibles.map(l => `ID: ${l.id_lugar} (${l.nombre || 'Sin nombre'})`).join(', ');
        }
        
        return res.status(400).json({
          error: `El lugar con ID ${idLugarNum} no existe en tb_lugares`,
          lugares_disponibles: !err2 ? lugaresDisponibles : [],
          sugerencia: `Lugares disponibles: ${lugaresTexto}`
        });
      });
      return;
    }

    const lugarEncontrado = lugares[0];
    console.log('✅ Lugar verificado:', lugarEncontrado);

    // Preparar datos con el lugar verificado
    const nuevaFalla = {
      eco: eco.trim(),
      placas: placas.trim().toUpperCase(), // Convertir placas a mayúsculas
      descripcion: descripcion.trim(),
      observaciones: observaciones.trim(),
      id_lugar: idLugarNum  // 👈 USAR el lugar proporcionado y verificado
    };

    console.log('=== DATOS A INSERTAR (CON LUGAR VERIFICADO) ===');
    console.log(nuevaFalla);
    console.log('=== INFORMACIÓN DEL LUGAR ===');
    console.log(lugarEncontrado);

    // Insertar la falla con el lugar verificado
    connection.query('INSERT INTO tb_fallas SET ?', nuevaFalla, (err, results) => {
      if (err) {
        console.error('❌ ERROR SQL al insertar falla:', err.code);
        console.error('❌ MENSAJE:', err.sqlMessage);
        console.error('❌ QUERY:', err.sql);

        // Manejo específico de errores comunes
        let errorMessage = 'Error al crear la falla';
        if (err.code === 'ER_NO_REFERENCED_ROW_2') {
          errorMessage = 'Error de referencia: El lugar no existe o hay un problema de foreign key';
        } else if (err.code === 'ER_BAD_FIELD_ERROR') {
          errorMessage = `Campo inválido en la tabla: ${err.sqlMessage}`;
        } else if (err.code === 'ER_NO_DEFAULT_FOR_FIELD') {
          errorMessage = `Campo requerido faltante: ${err.sqlMessage}`;
        }

        res.status(500).json({
          error: errorMessage,
          codigo: err.code,
          mensaje: err.sqlMessage,
          campos_intentados: Object.keys(nuevaFalla),
          lugar_usado: lugarEncontrado
        });
        return;
      }

      console.log('✅ FALLA CREADA EXITOSAMENTE');
      console.log('   - ID de falla:', results.insertId);
      console.log('   - Lugar asignado:', lugarEncontrado.nombre || `ID: ${lugarEncontrado.id_lugar}`);

      // Respuesta exitosa con información completa
      res.status(201).json({
        message: 'Falla creada exitosamente',
        id_falla: results.insertId,
        data: {
          id_falla: results.insertId,
          ...nuevaFalla,
          lugar_info: {
            id_lugar: lugarEncontrado.id_lugar,
            nombre: lugarEncontrado.nombre,
            descripcion: lugarEncontrado.descripcion
          }
        },
        resumen: {
          eco: nuevaFalla.eco,
          placas: nuevaFalla.placas,
          lugar: lugarEncontrado.nombre || `ID: ${lugarEncontrado.id_lugar}`,
          fecha_creacion: new Date().toISOString()
        }
      });
    });
  });
});
// Eliminar un registro en tb_fallas
router.delete('/fallas/:id', (req, res) => {
  const id = req.params.id;

  // Verificar que el registro existe antes de eliminar
  connection.query('SELECT * FROM tb_fallas WHERE id_falla = ?', [id], (err, results) => {
    if (err) {
      console.error('Error al buscar el registro:', err);
      return res.status(500).json({ error: 'Error al buscar el registro' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }

    connection.query('DELETE FROM tb_fallas WHERE id_falla = ?', [id], (err, deleteResults) => {
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
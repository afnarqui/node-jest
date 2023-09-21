const express = require('express');
const mongoose = require('mongoose');

// Conectarse a la base de datos
mongoose.connect('mongodb://localhost:27017/entidades', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectarse a la base de datos:', error);
  });

// Definir un modelo de datos para la entidad
const Schema = mongoose.Schema;
const entidadSchema = new Schema({
  // Define los campos de tu entidad aquí
  // Ejemplo: name: String, email: String
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  fecha: { type: Date, required: true }
});

const Entidad = mongoose.model('Entidad', entidadSchema);

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint para crear una entidad
app.post('/entidades', (req, res) => {
  const entidad = new Entidad(req.body);
  entidad.save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al crear la entidad' });
    });
});

// Endpoint para obtener todas las entidades
app.get('/entidades', (req, res) => {
  Entidad.find()
    .then((entidades) => {
      res.json(entidades);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al obtener las entidades' });
    });
});

// Endpoint para actualizar una entidad
app.put('/entidades/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  Entidad.findByIdAndUpdate(id, updates, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al actualizar la entidad' });
    });
});

// Endpoint para eliminar una entidad
app.delete('/entidades/:id', (req, res) => {
  const id = req.params.id;
  Entidad.findByIdAndDelete(id)
    .then(() => {
      res.json({ message: 'Entidad eliminada exitosamente' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al eliminar la entidad' });
    });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});


// Para crear una entidad, realiza una petición POST a http://localhost:3000/entidades con los datos de la entidad en el cuerpo de la solicitud.
// Para obtener todas las entidades, realiza una petición GET a http://localhost:3000/entidades.
// Para actualizar una entidad, realiza una petición PUT a http://localhost:3000/entidades/:id, donde :id es el identificador de la entidad que deseas actualizar. Los datos actualizados deben enviarse en el cuerpo de la solicitud.
// Para eliminar una entidad, realiza una petición DELETE a http://localhost:3000/entidades/:id, donde :id es el identificador de la entidad que deseas eliminar.

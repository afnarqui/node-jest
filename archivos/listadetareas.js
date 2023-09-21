const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint para obtener todas las tareas pendientes
app.get('/tasks', (req, res) => {
  const tasks = getTasksFromFile();
  res.json(tasks);
});

// Endpoint para agregar una nueva tarea
app.post('/tasks', (req, res) => {
  const tasks = getTasksFromFile();
  const newTask = req.body.task;
  tasks.push(newTask);
  saveTasksToFile(tasks);
  res.json(tasks);
});

// Función para obtener las tareas desde el archivo JSON
function getTasksFromFile() {
  const data = fs.readFileSync('tasks.json');
  return JSON.parse(data);
}

// Función para guardar las tareas en el archivo JSON
function saveTasksToFile(tasks) {
  const data = JSON.stringify(tasks);
  fs.writeFileSync('tasks.json', data);
}

app.listen(port, () => {
  console.log(`La aplicación está corriendo en http://localhost:${port}`);
});

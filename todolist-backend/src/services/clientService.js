const db = require("../db");

// Obtener todas las tareas
const getAllTasks = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM tasks_tb", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// Actualizar el status de una tarea
const updateTaskStatus = (id, status) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE tasks_tb SET status = ? WHERE id = ?",
      [status, id],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};
// Insertar una nueva tarea
const createTask = (name, status = "Pending") => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO tasks_tb (name, status) VALUES (?, ?)",
      [name, status],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

module.exports = {
  getAllTasks,
  updateTaskStatus,
  createTask, // Exportamos la nueva función
};

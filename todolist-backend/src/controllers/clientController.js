const clientService = require("../services/clientService");

// Obtener todas las tareas
const getTasks = async (req, res) => {
  try {
    const tasks = await clientService.getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve tasks" });
  }
};

// Actualizar el status de una tarea
const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["Pending", "In Progress", "Completed"].includes(status)) {
    return res.status(400).json({ error: "Invalid status value" });
  }

  try {
    await clientService.updateTaskStatus(id, status);
    res.status(200).json({ message: "Task updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

// Crear una nueva tarea
const createTask = async (req, res) => {
  const { name, status } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Task name is required" });
  }

  try {
    const result = await clientService.createTask(name, status || "Pending");
    res.status(201).json({ message: "Task created successfully", taskId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

module.exports = {
  getTasks,
  updateTaskStatus,
  createTask, // Exportamos el nuevo controlador
};

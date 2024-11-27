import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";

const App = () => {
  const [tasks, setTasks] = useState([]); // Estado para la lista de tareas
  const [modalTask, setModalTask] = useState(null); // Estado del modal

  // Obtener las tareas del backend
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  // Guardar cambios (agregar o editar)
  const handleSaveTask = async (task) => {
    try {
      if (task.id) {
        // Editar tarea
        await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: task.status }),
        });
        setTasks((prev) =>
          prev.map((t) => (t.id === task.id ? { ...t, status: task.status } : t))
        );
      } else {
        // Agregar nueva tarea
        const response = await fetch("http://localhost:3000/api/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: task.name, status: task.status }),
        });
        const data = await response.json();
        setTasks((prev) => [...prev, { id: data.taskId, ...task }]);
      }
    } catch (err) {
      console.error("Error saving task:", err);
    } finally {
      setModalTask(null); // Cerrar modal
    }
  };

  // Abrir modal para editar
  const handleEditTask = (task) => {
    setModalTask(task);
  };

  // Abrir modal para agregar
  const handleAddTask = () => {
    setModalTask({ name: "", status: "Pending" });
  };

  // Obtener tareas al cargar
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <Navbar onAddTask={handleAddTask} />
      
        <TableList tasks={tasks} onEditTask={handleEditTask} />
      
      {modalTask && (
        <ModalForm
          task={modalTask}
          onClose={() => setModalTask(null)}
          onSave={handleSaveTask}
        />
      )}
    </div>
  );
};

export default App;

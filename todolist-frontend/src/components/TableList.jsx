import React from "react";

const TableList = ({ tasks, onEditTask }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Encabezado */}
        <thead>
          <tr className="bg-neutral text-neutral-content">
            <th className="text-center">#</th>
            <th className="text-center">Task Name</th>
            <th className="text-center">Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        {/* Cuerpo */}
        <tbody className="hover">
          {tasks.map((task, index) => (
            <tr
              key={task.id}
              className={`hover:bg-neutral ${
                index % 1 === 0 ? "bg-neutral" : "bg-secondary"
              }`}
            >
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{task.name}</td>
              <td
                className={`text-center ${
                  task.status === "Completed"
                    ? "text-green-400"
                    : task.status === "In Progress"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {task.status}
              </td>
              <td className="text-center">
                <button
                  className="btn btn-accent"
                  onClick={() => onEditTask(task)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;

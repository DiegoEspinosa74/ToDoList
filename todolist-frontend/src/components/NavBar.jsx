import React from "react";

const Navbar = ({ onAddTask }) => {
  return (
    <div className="navbar bg-base-200 shadow-md">
      <div className="flex-1">
        <a className="btn btn-accent normal-case text-2xl">
          To Do List
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary normal-case text 2x1" onClick={onAddTask}>
          + Add Task
        </button>
      </div>
    </div>
  );
};

export default Navbar;

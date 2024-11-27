const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

// Rutas
router.get("/tasks", clientController.getTasks);
router.put("/tasks/:id", clientController.updateTaskStatus);
router.post("/tasks", clientController.createTask);


module.exports = router;

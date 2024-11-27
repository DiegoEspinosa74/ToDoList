const express = require("express");
const cors = require("cors");
const clientRoute = require("./routes/clientRoute");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", clientRoute);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

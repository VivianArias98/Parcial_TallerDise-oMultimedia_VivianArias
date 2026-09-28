const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

// Servir archivos estáticos (HTML, CSS, assets)
app.use(express.static(path.join(__dirname)));

// Ruta raíz → index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✦ Portafolio corriendo en: http://localhost:${PORT}`);
});













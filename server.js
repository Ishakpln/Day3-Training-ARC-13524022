const express = require("express");
const app = express();
const port = 3000;
const data = require("./Products.json");

app.use(express.static(__dirname)); // Serve static files

app.get("/api/products", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

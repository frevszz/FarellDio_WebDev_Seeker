const express = require("express");
const app = express();
const path = require("path");
// Serve static files dari folder public
app.use(express.static(path.join(__dirname, "public")));
// Serve static files dari folder pages
app.use(express.static(path.join(__dirname, "public/pages")));

// Route untuk calculator
app.get("/calculator", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/calculator.html"));
});

// Route untuk action plan
app.get("/actionPlan", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/actionPlan.html"));
});

app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});

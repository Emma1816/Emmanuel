const express = require('express');
const app = express();
const port = 3000;

// Parse JSON bodies
app.use(express.json());
const users = [
  { name: "Emma", role: "admin"}
  
  { name: "bob", role: "user"}
  { name: "andrew", role: "admin"}
  { name: "dave", role: "admin"}
  
]

app.get("/", (req, res) => {
  res.send("Hiiiii");
});

app.post("/api/products", (req, res) => {
  const body = req.body;
  console.log(body); // logs { name: "New product", description: "This is a new product." }
  res.send("Product received"); // always respond!
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Route pattern (no parameters)
app.get('/users', (reg, res) => {
  // Access the query object
  const rolefilter = req.query.role;
  // roleFilter will be admin for url /users
  res.send('Filtering users by role: ${rolefFilter}');
});
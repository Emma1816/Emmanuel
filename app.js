const express = require('express');
const app = express();
const port = 3000;

// Parse JSON bodies
app.use(express.json());

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

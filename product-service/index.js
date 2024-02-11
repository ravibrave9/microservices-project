const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let products = [];

// Create a product
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const product = { id: products.length + 1, name, price };
  products.push(product);
  res.json(product);
});

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Product Service is running on port ${PORT}`);
});

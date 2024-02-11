const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

let orders = [];

// Create an order
app.post('/orders', async (req, res) => {
  const { productId } = req.body;
  try {
    const productResponse = await app.get(`http://localhost:3000/products/${productId}`);
    const product = productResponse.data;
    const order = { id: orders.length + 1, product };
    orders.push(order);
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: 'Product not found' });
  }
});

// Get all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});

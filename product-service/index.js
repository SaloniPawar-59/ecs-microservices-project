const express = require('express');
const app = express();

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send("Product Service Healthy");
});

// Get all products
app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" }
    ]);
});

// Add product (optional but good for interview)
app.post('/products', (req, res) => {
    const { name } = req.body;

    res.json({
        message: "Product created",
        product: { id: Date.now(), name }
    });
});

// Start server
app.listen(3002, '0.0.0.0', () => {
    console.log("Product Service running on port 3002");
});
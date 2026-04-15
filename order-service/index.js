const express = require('express');
const app = express();

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
    res.status(200).send("Order Service Healthy");
});

// Create Order
app.post('/orders', (req, res) => {
    const { userId, productId } = req.body;

    const order = {
        orderId: Math.floor(Math.random() * 1000),
        userId,
        productId,
        status: "CONFIRMED"
    };

    res.json({
        message: "Order placed successfully",
        order: order
    });
});

// Get all orders (good for interview)
app.get('/orders', (req, res) => {
    res.json([
        { orderId: 101, userId: 1, productId: 2 },
        { orderId: 102, userId: 2, productId: 1 }
    ]);
});



// Start server
app.listen(3003, '0.0.0.0', () => {
    console.log("Order Service running on port 3003");
});
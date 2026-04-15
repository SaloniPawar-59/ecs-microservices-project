const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// USER SERVICE
app.post('/users', async (req, res) => {
    try {
        const response = await axios.post('http://user-service.local:3001/users', req.body);
        res.json(response.data);
    } catch (error) {
        console.error("User Service Error:", error.message);
        res.status(500).send("User service is down");
    }
});

// GET users (ADD THIS)
app.get('/users', async (req, res) => {
    try {
        const response = await axios.get('http://user-service.local:3001/users');
        res.json(response.data);
    } catch (error) {
        console.error("User Service Error:", error.message);
        res.status(500).send("User service is down");
    }
});

// PRODUCT SERVICE
app.get('/products', async (req, res) => {
    try {
        const response = await axios.get('http://product-service.local:3002/products');
        res.json(response.data);
    } catch (error) {
        console.error("Product Service Error:", error.message);
        res.status(500).send("Product service is down");
    }
});

// ORDER SERVICE (POST)
app.post('/orders', async (req, res) => {
    try {
        const response = await axios.post('http://order-service.local:3003/orders', req.body);
        res.json(response.data);
    } catch (error) {
        console.error("Order Service Error:", error.message);
        res.status(500).send("Order service is down");
    }
});

// ORDER SERVICE (GET) ✅ ADD THIS
app.get('/orders', async (req, res) => {
      console.log("GET /orders HIT"); 
    try {
        const response = await axios.get('http://order-service.local:3003/orders');
        res.json(response.data);
    } catch (error) {
        console.error("Order Service Error:", error.message);
        res.status(500).send("Order service is down");
    }
});


app.get('/health', (req, res) => {
    res.status(200).send("OK");
});

app.listen(3000, '0.0.0.0', () => {
    console.log("API Gateway running on port 3000");
});
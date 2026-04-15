const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).send("User Service Healthy");
});
app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: "Saloni", email: "saloni@test.com" },
        { id: 2, name: "John", email: "john@test.com" }
    ]);
});
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    res.json({
        message: "User created",
        user: { name, email }
    });
});

app.listen(3001, '0.0.0.0', () => {
    console.log("User Service running on port 3001");
});
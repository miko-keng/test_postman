const express = require('express');
const app = express();

app.use(express.json());

// GET route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// GET all users
app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ]);
});

// POST route
app.post('/users', (req, res) => {
    const user = req.body;
    res.json({
        message: "User created",
        data: user
    });
});

// PUT route
app.put('/users/:id', (req, res) => {
    res.json({
        message: `User ${req.params.id} updated`,
        newData: req.body
    });
});

// DELETE route
app.delete('/users/:id', (req, res) => {
    res.json({
        message: `User ${req.params.id} deleted`
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
const express = require('express');
require('dotenv').config();

const movieRoutes = require('./routes/movieRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }

    res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }

    next();
});

app.use('/api/movies', movieRoutes);

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});

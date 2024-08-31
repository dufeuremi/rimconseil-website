// app.js
const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const sqlite3 = require('sqlite3').verbose();

// Secret key for API authentication
const secretKey = "KClN2rhS6C7THXL";

// Middleware to check secret key
const checkSecretKey = (req, res, next) => {
    const { secret } = req.body;
    if (secret !== secretKey) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

// GET all articles
app.get('/articles', (req, res) => {
    db.all('SELECT * FROM articles', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// DELETE specific article
app.delete('/articles/:id', checkSecretKey, (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM articles WHERE id = ?', id, function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Article deleted successfully', changes: this.changes });
    });
});

// ADD article
app.post('/articles', checkSecretKey, (req, res) => {
    const { title, text, image, date } = req.body;
    db.run('INSERT INTO articles (title, text, image, date) VALUES (?, ?, ?, ?)', [title, text, image, date], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Article added successfully', id: this.lastID });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(cors({
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200 
}));
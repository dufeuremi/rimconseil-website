// db.js
const sqlite3 = require('sqlite3').verbose();

// Connecter à la database
const db = new sqlite3.Database('articles.db');

// Ajouter les elements
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY,
        title TEXT,
        text TEXT,
        image TEXT,
        date TEXT
    )`);
});

module.exports = db;

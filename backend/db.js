const sqlite3 = require('sqlite3').verbose();

// Connecter à la database avec lecture-écriture et création si elle n'existe pas
const db = new sqlite3.Database('articles.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error("Erreur lors de l'ouverture de la base de données:", err.message);
    } else {
        console.log("Connexion réussie à la base de données.");
    }
});

// Ajouter les éléments
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

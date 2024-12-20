const sqlite = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../db/db.sqlite');

const User = {
    all: () => {
        const db = new sqlite(dbPath);
        const query = 'SELECT * FROM users';
        const result = db.prepare(query).all();
        db.close();
        return result;
    },
    get: id => {
        const db = new sqlite(dbPath);
        const query = 'SELECT * FROM users WHERE id = ?';
        const result = db.prepare(query).get(id);
        db.close();
        return result;
    },
    create: user => {
        const db = new sqlite(dbPath);
        const query = 'INSERT INTO users (username, password, current_hash) VALUES (?, ?, ?)';
        const result = db.prepare(query).run(user.username, user.password, user.current_hash);
        db.close();
        return result;
    },
    update: (id, user) => {
        const db = new sqlite(dbPath);
        const query = 'UPDATE users SET username = ?, password = ?, current_hash = ? WHERE id = ?';
        const result = db.prepare(query).run(user.username, user.password, user.current_hash, id);
        db.close();
        return result;
    },
    delete: id => {
        const db = new sqlite(dbPath);
        const query = 'DELETE FROM users WHERE id = ?';
        const result = db.prepare(query).run(id);
        db.close();
        return result;
    }
};

module.exports = User;
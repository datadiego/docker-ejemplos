CREATE TABLE IF NOT EXISTS users  (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    current_hash TEXT NOT NULL
);

INSERT INTO users (username, password, current_hash) VALUES ('admin', 'admin', 'aaaa');
INSERT INTO users (username, password, current_hash) VALUES ('user', 'user', 'bbbb');
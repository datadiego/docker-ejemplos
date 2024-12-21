CREATE TABLE IF NOT EXISTS users  (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

INSERT INTO users (username, password) VALUES ('admin', 'admin', );
INSERT INTO users (username, password) VALUES ('user', 'user');

CREATE TABLE IF NOT EXISTS points {
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    points INTEGER NOT NULL,
    failed_hashes INTEGER NOT NULL,
    cracked_hashes INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
}

CREATE TABLE IF NOT EXISTS game {
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    current_hash TEXT NOT NULL,
    total_failed, INTEGER NOT NULL,
    total_cracked INTEGER NOT NULL,
    last_update INTEGER NOT NULL
}

CREATE TABLE IF NOT EXISTS game_hashes {
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    game_id INTEGER NOT NULL,
    hash TEXT NOT NULL,
    FOREIGN KEY (game_id) REFERENCES game(id)
}

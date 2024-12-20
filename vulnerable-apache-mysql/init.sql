CREATE TABLE IF NOT EXISTS usuarios (
    nombre TEXT NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO usuarios (nombre, password) VALUES ('admin', 'admin');
INSERT INTO usuarios (nombre, password) VALUES ('user', 'user');
CREATE DATABASE IF NOT EXISTS dev;
USE dev;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL
    );

CREATE TABLE IF NOT EXISTS news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

INSERT INTO news (name, text) VALUES
                                      ('News 1', 'It is news number 1. I am happy. It is amasing.'),
                                      ('News 2', 'It is news number 2. I like dogs.'),
                                      ('News 3', 'It is news number 3. Oh, also i like travel.'),
                                      ('News 4', 'It is news number 4. Meow.'),
                                      ('News 5', 'It is news number 5. Bye.');
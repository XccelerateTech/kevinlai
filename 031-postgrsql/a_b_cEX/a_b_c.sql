
-- a
CREATE TABLE stock (
    id SERIAL primary key,
    fruit_name VARCHAR(255) not null,
    description VARCHAR(50),
    quantity INTEGER,
    price DECIMAL
);

-- b

DROP TABLE stock

-- c


SELECT first_name AND last_name FROM exercise_C WHERE salary >5000 AND salary < 11000;
SELECT first_name AND last_name FROM exercise_C WHERE contract_length =< 2;
INSERT INTO exercixe_C (first_name, last_name, salary, contract_length) VALUES ('Peter', 'Pen', 10000, 5);
INSERT INTO exercixe_C (first_name, last_name, salary, contract_length) VALUES ('John', 'Don', 6000, 10);
UPDATE exercise_C SET contract_length = 2 AND salary = 8 WHERE first_name = 'Nancy' AND last_name = 'Greenberg';
SELECT * FROM exercise_C ORDER BY salary DESC;
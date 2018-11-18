-- a

SELECT citrus.color AS citrus_color, stock.quantity AS stock_quantity
FROM citrus
JOIN stock
ON citrus.id = stock.citrus_id
WHERE citrus.color = 'orange' AND stock.quantity > 0;

-- b

SELECT * FROM citrus FULL OUTER JOIN stock ON citrus.id = stock.citrus_id;

-- c

BEGIN
UPDATE stock SET quantity = quantity + 20 WHERE citrus_id = 1;
UPDATE stock SET quantity = quantity + 40 WHERE citrus_id = 2;
UPDATE stock SET quantity = quantity - 20 WHERE citrus_id = 2;
UPDATE stock SET quantity = quantity + 40 WHERE citrus_id = 4;
UPDATE stock SET quantity = quantity - 30 WHERE citrus_id = 1;
UPDATE stock SET quantity = quantity - 20 WHERE citrus_id = 4;
UPDATE stock SET quantity = quantity + 40 WHERE citrus_id = 3;
UPDATE stock SET quantity = quantity - 20 WHERE citrus_id = 3;
COMMIT
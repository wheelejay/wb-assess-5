-- Question 1
SELECT DISTINCT email 
FROM customers 
ORDER by email ASC;


-- Question 2
SELECT id
FROM orders 
WHERE customer_id IN (
  SELECT id 
  FROM customers 
  WHERE fname = 'Elizabeth' AND lname = 'Crocker' );

-- Question 3
SELECT SUM(num_cupcakes) / 2 AS sum 
FROM orders 
WHERE processed = 'false';


-- Question 4
SELECT cupcakes.name, SUM(orders.num_cupcakes) / 2 AS total_ordered
FROM cupcakes 
LEFT JOIN orders ON cupcakes.id = orders.cupcake_id
GROUP BY cupcakes.name
ORDER BY cupcakes.name ASC;


-- Question 5
SELECT customers.email, SUM(orders.num_cupcakes) / 2 AS total_cupcakes_ordered
FROM customers  
JOIN orders ON customers.id = orders.customer_id
GROUP BY customers.email
ORDER BY total_cupcakes_ordered DESC;


-- Question 6
SELECT DISTINCT customers.fname, customers.lname, customers.email
FROM customers
JOIN orders ON customers.id = orders.customer_id
JOIN cupcakes ON orders.cupcake_id = cupcakes.id
WHERE cupcakes.name = 'funfetti' AND orders.processed = 'true';


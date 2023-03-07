const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // 
app.get('/api/items', (req, res) => {
  pool.query('SELECT * FROM items ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }

    res.status(200).json(results.rows);
  });
});
app.get('/api/items/:id', (req, res) => {
    const id = req.params.id;
  
    pool.query('SELECT * FROM items WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
  
      // return just the single item object
      res.status(200).json(results.rows[0]);
    });
  });
  
  

app.post('/api/items', (req, res) => {
  const { name, price, discount, sponsored, rating, description, image } = req.body;

  pool.query('INSERT INTO items (name, price, discount, sponsored, rating, description, image) VALUES ($1, $2, $3, $4, $5, $6, $7)', [name, price, discount, sponsored, rating, description, image], (error, results) => {
    if (error) {
      throw error;
    }

    res.status(201).send(`Item added with ID: ${results.insertId}`);
  });
});

app.put('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, discount, sponsored, rating, description, image } = req.body;

  pool.query('UPDATE items SET name = $1, price = $2, discount = $3, sponsored = $4, rating = $5, description = $6, image = $7 WHERE id = $8', [name, price, discount, sponsored, rating, description, image, id], (error, results) => {
    if (error) {
      throw error;
    }

    res.status(200).send(`Item modified with ID: ${id}`);
  });
});

app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM items WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }

    res.status(200).send(`Item deleted with ID: ${id}`);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

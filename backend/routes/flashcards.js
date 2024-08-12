const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all flashcards
router.get('/', (req, res) => {
  db.query('SELECT * FROM flashcards', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new flashcard
router.post('/', (req, res) => {
  const { question, answer } = req.body;
  db.query('INSERT INTO flashcards (question, answer) VALUES (?, ?)', [question, answer], (err) => {
    if (err) throw err;
    res.sendStatus(201);
  });
});

// Update an existing flashcard
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  db.query('UPDATE flashcards SET question = ?, answer = ? WHERE id = ?', [question, answer, id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

// Delete a flashcard
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM flashcards WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

module.exports = router;

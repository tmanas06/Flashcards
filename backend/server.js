const express = require('express');
const cors = require('cors');
const flashcardsRouter = require('./routes/flashcards');
require('dotenv').config();
const db = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/flashcards', flashcardsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

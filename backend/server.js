const express = require('express');
const cors = require('cors');
const flashcardsRouter = require('./routes/flashcards');
require('dotenv').config();
const { Pool } = require('pg');

// PostgreSQL connection configuration
const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:r3fg0sZlmVFW@ep-soft-scene-a5g7qc7u.us-east-2.aws.neon.tech/neondb?sslmode=require'
});

pool.connect()
  .then(client => {
    console.log('Connected to Neon PostgreSQL database');
    client.release();
  })
  .catch(err => console.error('Error connecting to Neon PostgreSQL database', err));

const app = express();
app.use(cors());
app.use(express.json());

app.use('/flashcards', flashcardsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
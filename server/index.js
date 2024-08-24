const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { Pool } = require('pg');
const { registerUser } = require('./utils/registerUser');
const app = express();
const cors = require('cors');

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: 'ilya',
  host: process.env.RENDER_HOST,
  database: process.env.RENDER_DATABASE,
  password: process.env.RENDER_PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/', async (req, res) => {
  res.send('wprk wprk');
});

app.post('/register', async (req, res) => {
  await pool.query(registerUser(req.body));
  const newData = await pool.query(
    `SELECT * FROM users WHERE username='${req.body.username}'`
  );

  res.send(newData.rows[0]);
});

app.listen(PORT, () => {
  console.log(`listen: ${PORT}`);
});

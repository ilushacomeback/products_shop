require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require('./router/index');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', router);

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`listen: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
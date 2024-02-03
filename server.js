import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import colors from 'colors';
import morgan from 'morgan';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'data received', data: req.body });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(colors.cyan.underline(`Server listen on PORT ${port}`));
});

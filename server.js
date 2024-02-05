import * as dotenv from 'dotenv';
dotenv.config();

import express, { response } from 'express';
const app = express();

import colors from 'colors';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'google', position: 'back-end' },
];

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

// Get All Jobs
app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({ jobs });
});

// Create Job
app.post('/api/v1/jobs', (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res
      .status(400)
      .json({ msg: 'Please provide company and position!' });
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(200).json({ jobs });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(colors.cyan.underline(`Server listen on PORT ${port}`));
});

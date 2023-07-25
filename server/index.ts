import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import route from './router';

const PORT = 3000;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', route);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

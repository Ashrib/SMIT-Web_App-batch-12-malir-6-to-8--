import express from 'express';
import { emailQueue } from './emailQueue.js';

const app = express();
app.use(express.json());

app.post('/register', async (req, res) => {
  // sccuessful register and store in db

  // send email to user
  emailQueue.add('sendEmail', { to: 'abc@gmail.com' });

});

app.listen(3000, () => console.log('Server running on port 3000'));

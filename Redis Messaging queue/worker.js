import { emailQueue } from "./emailQueue.js";
import { Worker } from "bullmq";

const myWorker = new Worker('emailQueue', async (job) => {
       console.log(`Processing job ${job.id}: Sending email to ${job.data.to}`);
    // nodemailer

     await new Promise((resolve,reject) => setTimeout(resolve, 2000));
      console.log(`Email sent to ${job.data.to}`);
    
    }, { connection: { host: 'localhost', port: 6379 } });


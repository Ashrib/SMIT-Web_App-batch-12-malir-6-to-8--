import { Queue } from "bullmq";

const redisConfig = {
  host: '127.0.0.1', // Redis server address
  port: 6379,        // Redis default server port
  // You can add more Redis connection options here if needed
};
// Create a queue with the specified Redis connection
export const emailQueue = new Queue('emailQueue', { redis: redisConfig });
 
import express from 'express';
import multer from 'multer';
import path from 'path';
import uploadRoute from './routes/uplaodRoutes.js';
import dotenv from 'dotenv';



dotenv.config();

const app = express();
const port = 3000;

app.use("/upload", uploadRoute);

app.get('/', (req,res)=>{
    res.send("server is running")
})



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

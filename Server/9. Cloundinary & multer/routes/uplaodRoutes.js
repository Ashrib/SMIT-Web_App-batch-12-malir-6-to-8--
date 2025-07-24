import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';


const route = express.Router();


    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Use environment variables for security
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        secure: true // Recommended to use secure (HTTPS) URLs
    });


route.post('/', multer.single('image'), (req, res) => {

 const upload_stream = cloudinary.uploader.upload_stream(
        {
          public_id: '...id',
          resource_type: "auto", // Assume auto-detect the resource type
          folder: 'images',
        },
        (error, results) => {
          if (error) {
            console.error("Error uploading image:", error);
            res.status(500).send('Error uploading file');
            return
            
          } else {
            console.log("Uploaded image:", results);
            console.log(results);
          }
        }
      );
    upload_stream.end(req.file.buffer);

  res.send('File uploaded successfully');
});

export default route;
import mongoose from "mongoose"

export default async function dbConnect() {
    try {
        if (mongoose.connection.readyState===1) {
            console.log("mongodb already connected!");
            return true;
        }

        await mongoose.connect(process.env.MONGODB_URL);
        console.log('mongodb connected!');
    } catch (error) {
        console.error('error in mongodb connection!:', error);
        return false;
    }
}
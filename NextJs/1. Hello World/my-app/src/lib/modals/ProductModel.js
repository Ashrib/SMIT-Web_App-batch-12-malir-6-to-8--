
import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
    name: { required: true, type: String },
    price: { required: true, type: Number },
    description: { type: String, default: "" },
},{
    timestamps: true,
});

export default mongoose.models.Products || mongoose.model('Products', ProductSchema);

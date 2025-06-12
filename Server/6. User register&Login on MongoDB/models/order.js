import mongoose from "mongoose";

let orderSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    uid: {type: mongoose.Schema.Types.ObjectId, required: true},
},
{timestamps: true}
)

let Order = mongoose.model('smit_orders', orderSchema);

export default Order;


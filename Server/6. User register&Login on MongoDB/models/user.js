import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    age: {type: Number, required: true},
    password: {type: String, required: true},
    marks: [Number],
    isAdmin: {type: Boolean, default: false},
    total: {type: Number, default: 0}, 
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'smit_orders' }], 
}, { timestamps: true });

let User = mongoose.model('Smit_Users', userSchema);

export default User;
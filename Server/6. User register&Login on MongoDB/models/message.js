import mongoose from "mongoose";

let messageSchema = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId,  required: true },
    to: { type: mongoose.Schema.Types.ObjectId, required: true },
    text: { type: String, required: true },
    
},{
    timestamps: true
}
);

    

let Message = mongoose.model('Smit_Messages', messageSchema);

export default Message;
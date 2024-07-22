import mongoose from "mongoose";

const greetingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    font: { type: String, required: true },
    price: { type: Number, required: true},
    image: { type: String, required: true },
    category:{ type:String, required:true}
})

const greetingModel = mongoose.models.greeting || mongoose.model("greeting", greetingSchema);
export default greetingModel;
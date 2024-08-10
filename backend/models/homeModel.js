import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    category:{ type:String, required:true}
})

const homeModel = mongoose.models.homes || mongoose.model("home", homeSchema);
export default homeModel;
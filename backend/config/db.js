import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://VelvetBug:1L0veBiriy*ni@cluster0.5febq.mongodb.net/VelvetBugMain').then(()=>console.log("DB Connected"));
   
}

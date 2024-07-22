import mongoose from "mongoose";

export const  connectDB = async () =>{

    // await mongoose.connect('mongodb://127.0.0.1:27017/food-del').then(()=>console.log("DB Connected"));
    await mongoose.connect('mongodb://127.0.0.1:27017/Greeting').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
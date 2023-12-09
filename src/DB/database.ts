import mongoose from "mongoose";

const connectionString = "mongodb+srv://yashkumarprajapati51:4577@cluster0.ejtkiew.mongodb.net/"

mongoose.set("strictQuery", false);

mongoose.connect(connectionString)
.then(()=>{
    console.log("connection sucessfull");
})
.catch((err)=>{
    console.log("failed to connect db ", err);
})
import mongoose from "mongoose";
const dbConnection= ()=> {mongoose.connect("mongodb://localhost:27017/MERN_Hospital_Management").then(()=>{
    console.log("mongo connected");
})
.catch((err)=>{
    console.log(err);
})}
export default dbConnection;
import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: 'dzkhjkwqh',
    api_key: '398446618893567',
    api_secret: 'azCKTuoxSRt_DTeWJtTnfXf47q4',
});

app.listen(4000, ()=>{
    console.log("server running on port 4000");
});

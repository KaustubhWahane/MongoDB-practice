const mongoose = require("mongoose");
const express = require("express");

const {PORT, MONGODB_URL} = require("./constants");
const { userRouter } = require("./routes/user.router");

const app = express();

// To parse the body and extract it
app.use(express.json());

app.get("/",(req,res) =>{
    res.send({message : "Hello"});
})

async function Connection (){
    try {
       await mongoose.connect(MONGODB_URL);
       app.listen(PORT, ()=>{
        console.log(`It's running on this server ${PORT}`);
        console.log(`Base URL: http:://127.0.0.1: ${PORT}`);
    });
    } catch(error) {
        console.log(error);
}
}
// Connection();

// Start server first then Connect to MongoDB
const startServerFirst = () => {
    app.listen(PORT , async () => {
        try {
            console.log(`It's running on this server ${PORT}`);
            console.log(`Base URL: http://127.0.0.1:${PORT}`);
            await mongoose.connect(MONGODB_URL);
            console.log("DB Connected!");
          } catch (error) {
            console.log(error?.message);
          }   
    })

}
startServerFirst();

app.use("/users" , userRouter);
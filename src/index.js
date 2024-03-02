const mongoose = require("mongoose");
const express = require("express");

const {PORT, MONGODB_URL} = require("./constants");

const app = express();

app.get("/",(req,res) =>{
    res.send({message : "Hello"});
})

app.listen(PORT, ()=>{
    console.log(`It's running on this server ${PORT}`);
    console.log(`Base URL: http:://127.0.0.1: ${PORT}`);
})


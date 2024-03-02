const express = require("express");
const { UserModel } = require("../model/user.models");

const userRouter = express.Router();

userRouter.get("/",  async (req,res) =>{
   try {
    const result = await UserModel.find();
    res.send(result);
   } catch (error) {
        console.log(error, "Error while fetching data from DB!");
        res.status(500);
        res.send(error);
   }
    // Find the data from DB and return in response and find the method is Async

})
userRouter.post("/create" , async(req,res) =>{
    const user = req.body;
    console.log(user);
    res.send(user);
})

module.exports = {
    userRouter
};
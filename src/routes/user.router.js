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

// Posting the data 
userRouter.post("/create" , async(req,res) =>{
    try {
        const user = req.body;
        const userInDb = new UserModel(user);
        // const userInDb = new UserModel.create(user);
        await userInDb.save();
        res.send(userInDb)
    } catch (error) {
        res.send(error?.message)
    }
    console.log(user);
    res.send(user);
})

// Patching the data 
userRouter.patch("/update/:user_id" , async (req, res) =>{
    try {
        const {user_id} = req.params;
        const result = await UserModel.find().where('_id', user_id);
        res.send(result);
    } catch (error) {
        
    }
})

module.exports = {
    userRouter
};

/*
Find:- Returns an array
FindOne:- Returns the item on 0 index
*/

// Deleting the data

userRouter.delete("/delete/:user_id", async(req, res) =>{
    try {
        const {user_id} = req.params;
        const result = await UserModel.findByIdAndDelete(user_id);
        console.log(result);
    } catch (error) {
        res.send({message : error.message})
    }
})
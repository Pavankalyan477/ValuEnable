const mongoose=require("mongoose");
const { create } = require("../models/signup.model");

const router=express.Router();

const Signup=require("./signin.model")

// Creating API for POST Data

router.post("/signup", async (req,res)=>{
    let data=await Signup.create(req.body);
    return req.status(201).send({data});
})

// Creating API for GET the Data

router.get("/signup",async(req,res)=>{
    let data=await Signup.find().lean().exec();

    return res.status(200).send({data});
})




const express=require("express")

const router=express.Router();

const Signup=require("../models/signup.model.js")

// Creating API for POST Data

router.post("/signup", async (req,res)=>{
    let data=await Signup.create(req.body);
    return res.status(201).send({data});
})

// Creating API for GET the Data

router.get("/signup",async(req,res)=>{
    let data=await Signup.find().lean().exec();

    return res.status(200).send({data});
})

// Creating API for patch the Data

router.patch("/signup:/id", async (req,res)=>{
    let data=await Signup.findByIdAndUpdate(req.params.id,req.body,{new :true});
    return res.status(201).send({data});
})


module.exports=router;
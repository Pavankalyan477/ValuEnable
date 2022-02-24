const mongoose=require("mongoose");

// Creating SIGNUP Schemaa

const signup=new mongoose.Schema({
    username:{type: String, unique: true, required:true},
    role:{type: String, unique:true,required:true},
    email:{type: String, unique:true,required:true},
    password:{type: String,required:true}
})

const Signup=mongoose.model("signup",signup);

// Exporting Signup schema

module.exports=Signup;
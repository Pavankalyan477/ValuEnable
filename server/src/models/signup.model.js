const mongoose=require("mongoose");

// Creating SIGNUP Schemaa

const signupSchema=new mongoose.Schema({
    username:{type: String, unique: true, required:true},
    role:{type: String,required:true},
    email:{type: String, unique:true,required:true},
    password:{type: String,required:true}
})

const Signup=mongoose.model("SIGNUP data",signupSchema);

// Exporting Signup schema

module.exports=Signup;
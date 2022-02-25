const express = require("express");

const signup= require("./controllers/signup.controller")
const app = express();
app.use(express.json());





app.post("/", signup);



module.exports = app;
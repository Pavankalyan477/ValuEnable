import React, { useState } from "react";
import "./signup.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {axios} from "axios";
import Button from "@mui/material/Button";
//import Menu from "@mui/material/Menu";
import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

export default function Signup() {
  const [errorMail, seterrorMail] = useState(false);
  const [errorName, seterrorName] = useState(false);
  const [post, setPost] = useState(null);
 
  const [mail, setMail] = useState("");
  const [Name, setName] = useState("");
  const [role, setRole] = useState("");
  const [password,setPassword]=useState("");

  const handleChangeMail = (e) => {
    setMail(e.target.value);
    var out = e.target.value;
    var num = out.length;
    if (num[out.length - 1] === ".") {
      seterrorMail(true);
    } else {
      seterrorMail(false);
    }
  };


  // const [country, setCountry] = useState("India");
  // const handleChangeCountry = (event) => {
  //   setCountry(event.target.value);
  // };

  const handleChangeName = (e) => {
    var format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    setName(e.target.value);
    if (format.test(e.target.value)) {
      seterrorName(true);
    } else {
      seterrorName(false);
    }
  };

  async function createPost() {
    await axios
      .post("http://localhost:3005/signup", {
        username:Name,
        role:role,
        mail:mail,
        password:password
        
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  return (
    <>
      <div className="contact"> Contact us</div>
      <div className="Total">
        <div className="Tab">
          <h1>Enter your details for signup.</h1>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "45ch" },
            }}
            sm={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              {errorName === false ? (
                <TextField
                  id="outlined-textarea"
                  label="Enter Name"
                  placeholder="Enter Name"
                  value={Name}
                  onChange={handleChangeName}
                />
              ) : (
                <TextField
                  id="outlined-textarea"
                  label="Enter Name"
                  placeholder="Enter Name"
                  multiline
                  error
                  value={Name}
                  onChange={handleChangeName}
                  helperText="Special Characters not allowed"
                />
              )} <br />
              
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Select Role"
                placeholder="Select your Role"
               
                 value={role}
                onChange={(e)=>setRole(e.target.value)}
               
                sx={{ m: 1, width:"45ch" }}
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="moderator">Moderator</MenuItem>
              </Select>
            
              <br />
              {errorMail === false ? (
                <TextField
                  id="outlined-textarea"
                  label="Email Address"
                  multiline
                  value={mail}
                  onChange={handleChangeMail}
                />
              ) : (
                <TextField
                  id="outlined-textarea"
                  label="Email Address"
                  multiline
                  value={mail}
                  onChange={handleChangeMail}
                  helperText="Mail Should Not contain full stop"
                />
              )}
              <TextField
                id="outlined-textarea"
                label="Password"
                multiline
                value={password}
                 onChange={(e)=>setPassword(e.target.value)}
              
              />
            </div>
            <div>
              <Button variant="contained" id="Submit_btn" onClick={createPost}>
                Submit
              </Button>
            </div>
            <div></div>
          </Box>
        </div>
      </div>
    </>
  );
}

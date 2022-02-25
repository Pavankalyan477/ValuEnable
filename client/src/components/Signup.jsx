import React, { useState } from "react";
import "./signup.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
//import Menu from "@mui/material/Menu";
import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";
import { FormControl } from "@mui/material";
export default function Signup() {
  const [errorNumber, seterrorNumber] = useState(false);
  const [errorMail, seterrorMail] = useState(false);
  const [errorName, seterrorName] = useState(false);
  const [value, setValue] = useState("");
  const [mail, setMail] = useState("");
  const [Name, setName] = useState("");

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

  const handleChange = (e) => {
    setValue(e.target.value);
    if (/^\d+$/.test(e.target.value)) {
      seterrorNumber(false);
    } else {
      seterrorNumber(true);
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
                multiline
                // value={}
                onChange={handleChange}
               
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
                value={mail}
                // onChange={handleChangeMail}
                helperText="Mail Should Not contain full stop"
              />
            </div>
            <div>
              <Button variant="contained" id="Submit_btn">
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

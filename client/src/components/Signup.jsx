import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Signup() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "25ch" },
        }}
        Validate
        autoComplete="off"
      >
        <h1>SIGN UP</h1>
        <TextField
          id="outlined-password-input"
          label="USERNAME"
          type="name"
        />{" "}
        <br />
        <TextField
          id="outlined-password-input"
          label="E-MAIL"
          type="mail"
        />{" "}
         <br />
        <TextField id="outlined-password-input" label="ROLE" type="role" />{" "}
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </Box>
    </div>
  );
}

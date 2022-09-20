import * as React from "react";
import TextField from "@mui/material/TextField";
import "../Designs/ToDoPage.css";
import Box from "@mui/material/Box";


export default function TextFields({ onChange }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="TextFields">
        <TextField
          id="outlined-basic"
          label="TITEL"
          variant="outlined"
          onChange={onChange}/> </div>
    </Box>
  );
}
import React from "react";
import { useState } from "react";
import TextFields from "./TextFields";
import "../Designs/ChangeToDo.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuAppBar from "./MenuAppBar";
import { useParams } from "react-router";


function ChangeData() {
  const [title, setTitle] = useState("");
  const [auth, setAuth] = React.useState(true);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const params = useParams();
  const changeData = (id) => {
    fetch("http://localhost:3000/tasks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: params.id,
        completed: false,
        title: title,
      }),
    }).then(alert("succesfully"));
  };
  return (
    <>
      <MenuAppBar />
      <div className="ChangeToDo">
        <TextFields onChange={handleChange} />
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? "✅" : "❌"}
          />
        </FormGroup>

        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab color="secondary" aria-label="edit" onClick={ChangeData}>
            <EditIcon />
          </Fab>
        </Box>
      </div>
    </>
  );
}

export default ChangeData;
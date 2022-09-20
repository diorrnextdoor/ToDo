import React, { useState, useEffect } from "react";
import { ListItem, TableCell, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import MenuAppBar from "./MenuAppBar";
import { Link } from "react-router-dom";

function ShowTask(onClick) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const API = "http://localhost:3000/tasks";
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTasks(res);
      });
  };
  const handleClick = (id) => {
    return (e) => {
      e.preventDefault();
      fetch(API)
        .then((res) => res.json())
        .then((res) => {
          setTasks(res);

          const objWithIdIndex = res.findIndex((obj) => obj.id === id);
          res.splice(tasks, id);
          const newTask = [...res];

          console.log(tasks);
          console.log(id);
          console.log(res);
          console.log(newTask);

          fetch("http://localhost:3000/task/" + id, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
        });
    };
  };

  const [auth, setAuth] = React.useState(true);
  const handleChange = (event) => {
    if (tasks[0].completed === true) {
      setAuth(event.target.checked);
    }
    console.log(tasks[0].completed);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <MenuAppBar />
      <div className="centerTable">
        <div className="tableContainer" id="container">
          <Typography className="showTaskTitle" variant="h5">Your Tasks:</Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Aufgaben Nummer</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Completed</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {tasks.map((index) => {
                return (
                  <TableRow>
                    <TableCell>{index.id}</TableCell>
                    <TableCell>{index.title}</TableCell>
                    <TableCell>
                      {" "}
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
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={handleClick(index.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Box sx={{ "& > :not(style)": { m: 1 } }}>
                        <Fab color="secondary" aria-label="edit">
                          <Link to={`change/${index.id}`}>
                            <EditIcon />
                          </Link>
                        </Fab>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default ShowTask;
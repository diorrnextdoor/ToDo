import React, { useState, useEffect } from "react";
import { ListItem, TableCell, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function ShowTasks() {
  const [post, getPost] = useState([]);
  const API = "http://localhost:3000/tasks";
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getPost(res);
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div className="centerTable">
        <div className="tableContainer">
          <Typography className="showTaskTitle" variant="h5">
            Your Tasks:
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {post.map((index) => {
                return (
                  <TableRow>
                    <TableCell>{index.id}</TableCell>
                    <TableCell>{index.title}</TableCell>
                    <TableCell>{index.completed ? "✅" : "❌"}</TableCell>
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

export default ShowTasks;
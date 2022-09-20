import React, { useState, useEffect } from "react";
import Submit from "./Submit.js";
import '../Designs/CreateToDo.css';
import TextFields from "./TextFields";

function CreateToDo() {
  const API = "http://localhost:3000/tasks";
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: false,
        title: title,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Good News, Task created");
          return response.json();
        } else if (response.status === 408) {
          alert("Oops, something went wrong");
          this.setState({ requestFailed: true });
        }
      })
      .then((data) => {
        this.setState({ isLoading: false, downlines: data.response });
        alert("Data stored");
      })
      .catch((error) => {
        this.setState({ requestFailed: true });
      });
    console.log("End call api");
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className="createToDo">
        <TextFields onChange={handleChange} />
        <Submit onClick={handleClick} />
      </div>
    </>
  );
}

export default CreateToDo;
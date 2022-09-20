import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShowTasks from './Components/ShowTasks';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CreateToDo from './Components/CreateToDo';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/create" element={<CreateToDo />} />
        <Route path="/" element={<ShowTasks />} />
      </Routes>
    </Router>
  </>
);

import React, { useState } from "react";
import './Designs/App.css';
import TodoForm from "./components/CreateToDo";
import TodoItem from "./components/ToDoItem";
import LoginForm from "./components/LoginForm";

function App() {

  const [todos, setTodos] = useState([]);

function renderTasks(tasks) {
  const tbody = document.querySelector("#tasks tbody");
  tasks.forEach((task) => {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.innerText = task.id;
    const titleCell = document.createElement('td');
    titleCell.innerText = task.title;
    const completedCell = document.createElement('td');
    completedCell.innerText = task.completed ? "✅" : "❌";

    row.apprendChild(idCell);
    row.apprendChild(titleCell);
    row.apprendChild(completedCell);
    tbody.apprendChild(row)
  });
}

  function indexTasks() {
    fetch('http://localhost:3000/tasks', {
      method: 'GET',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      renderTasks(data);
    }).catch(() => {
      alert("Something went wrong! :(");
  })

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false, important: false}
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.important = !todo.important
      }
      return todo
    })

    setTodos(updatedTodos)
  }
  let sortedTodos = todos.sort((a, b) => b.important - a.important)
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <hr className="seperator"/>
      {sortedTodos.map((todo) => {
        return (
          <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>
        )
      })}
    </div>
  );

  
}
}

export default App;
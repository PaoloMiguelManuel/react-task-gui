import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
// import illustration from '../public/undraw_selection_re_ycpo.svg';

function App() {


  // const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  // all todos
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);




  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('locallySavedTodos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    // filterHandler();
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }

    localStorage.setItem('locallySavedTodos', JSON.stringify(todos))
  }, [todos, status]);

  // const filterHandler = () => {
  //   switch (status) {
  //     case 'completed':
  //       setFilteredTodos(todos.filter(todo => todo.completed === true));
  //       break;
  //     case 'uncompleted':
  //       setFilteredTodos(todos.filter(todo => todo.completed === false));
  //       break;
  //     default:
  //       setFilteredTodos(todos);
  //       break;
  //   }
  // }


  // const saveLocally = () => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }

  // const getLocal = () => {

  // }

  return (
    <div className="App">
      <header>
        <h1>TODO List</h1>
      </header>
      {/* <img src={illustration} /> */}
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;

import { useState } from 'react';

import TodoSort from './TodoSort/TodoSort.js';
import TodoList from './TodoList/TodoList.js';
import TodoInputs from './TodoInputs/TodoInputs.js';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    console.log(todo);
    setTodos([...todos, todo]);
  }

  const prios = ['low', 'normal', 'high'];


  return (
    <>
      <div className="TodoApp">
        <h1>ToDo List</h1>
        <TodoSort todos={todos} setTodos={setTodos} keyName='prio' />
        <TodoList todos={todos} setTodos={setTodos} prios={prios} />
        <TodoInputs addTodo={addTodo} prios={prios} />
      </div>
    </>
  );
}

export default App;

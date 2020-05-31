import React, { useState } from 'react';
import './TodoApp.css';

import TodoForm from '../TodoForm/TodoForm';
import SingleTodo from '../SingleTodo/SingleTodo';
const TodoApp = () => {
  const [todos, setTodos] = useState([
    { text: 'Create the best todo app ever', done: true },
    { text: 'get interview', done: false },
    { text: 'Get hired', done: false },
  ]);

  const addTodo = (todoText) => {
    const newTodo = { text: todoText, done: false };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (todoText) => {
    // Find the index of the object containing the text
    const index = todos.findIndex((todo) => todo.text === todoText);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos([...newTodos]);
  };

  const toggleDone = (todoText) => {
    // Find the index of the object containing the text
    const index = todos.findIndex((todo) => todo.text === todoText);
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos([...newTodos]);
  };

  return (
    <div className='TodoApp'>
      <h1 className='TodoApp__title'>Todos</h1>
      <TodoForm submitForm={addTodo} />
      {todos.map((todo) => (
        <SingleTodo
          key={todo.text.replace(' ', '')}
          text={todo.text}
          done={todo.done}
          deleteClick={deleteTodo}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
};

export default TodoApp;

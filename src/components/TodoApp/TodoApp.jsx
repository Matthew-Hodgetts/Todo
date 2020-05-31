import React, { useState } from 'react';
import './TodoApp.css';

import { v4 as uuidv4 } from 'uuid';

import TodoForm from '../TodoForm/TodoForm';
import SingleTodo from '../SingleTodo/SingleTodo';
const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: 'Create the best todo app ever', done: true },
    { id: uuidv4(), text: 'get interview', done: false },
    { id: uuidv4(), text: 'Get hired', done: false },
  ]);

  const addTodo = (todoText) => {
    const newTodo = { id: uuidv4(), text: todoText, done: false };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    // Find the index of the object containing the text
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos([...newTodos]);
  };

  const toggleDone = (id) => {
    // Find the index of the object containing the id
    const index = todos.findIndex((todo) => todo.id === id);
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
          key={todo.id}
          id={todo.id}
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

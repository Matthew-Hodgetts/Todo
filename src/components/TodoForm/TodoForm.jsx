import React, { useState } from 'react';
import './TodoForm.css';
const TodoForm = ({ submitForm }) => {
  const [todoText, setTodoText] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    // Do some checks here later?
    submitForm(todoText);
    setTodoText('');
  };
  return (
    <div className='todoForm'>
      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          value={todoText}
          name='todoText'
          placeholder='What do you need to do?'
          onChange={(e) => setTodoText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoForm;

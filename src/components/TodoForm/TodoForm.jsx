import React, { useState } from 'react';
import './TodoForm.css';
const TodoForm = ({ submitForm }) => {
  const [todoText, setTodoText] = useState('');
  const [errors, setErrors] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    // Check length
    if (todoText.length < 1) {
      setErrors(true);
      return;
    }

    submitForm(todoText);
    setTodoText('');
    setErrors(false);
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
          className={errors ? 'errors' : ''}
        />
      </form>
    </div>
  );
};

export default TodoForm;

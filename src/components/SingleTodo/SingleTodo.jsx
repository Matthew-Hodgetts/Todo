import React from 'react';
import './SingleTodo.css';
import check from './check.svg';
const SingleTodo = ({ id, text, done, deleteClick, toggleDone, editTodo }) => {
  return (
    <div className={done ? 'singleTodo singleTodo--done' : 'singleTodo'}>
      <button className='singleTodo__check' onClick={(e) => toggleDone(id)}>
        <img src={check} alt='Check mark' />
      </button>
      <input
        className='singleTodo__text'
        value={text}
        onChange={(e) => editTodo(e, id)}
      />
      <button
        className='singleTodo__delete'
        onClick={() => deleteClick(id)}></button>
    </div>
  );
};

export default SingleTodo;

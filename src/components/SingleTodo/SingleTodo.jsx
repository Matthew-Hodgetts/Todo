import React from 'react';
import './SingleTodo.css';
import check from './check.svg';
const SingleTodo = ({ id, text, done, deleteClick, toggleDone }) => {
  return (
    <div className={done ? 'singleTodo singleTodo--done' : 'singleTodo'}>
      <button className='singleTodo__check' onClick={(e) => toggleDone(id)}>
        <img src={check} alt='Check mark' />
      </button>
      <p className='singleTodo__text'>{text}</p>
      <button
        className='singleTodo__delete'
        onClick={() => deleteClick(id)}></button>
    </div>
  );
};

export default SingleTodo;

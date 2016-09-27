import React from 'react';

export function Todo(props) {
  const { todo } = props;
  if(todo.get('isDone')) {
    return <strike>{todo.get('text')}</strike>;
  } else {
    return <span>{todo.get('text')}</span>;
  }
}

export function TodoList(props) {
  const { todos } = props;
  return (
      <div className='todo'>
      <input type='text' placeholder='Add todo' />
      <ul className='todo__list'>
      {todos.map(t => (
            <li key={t.get('id')} className='todo__item'>
            <Todo todo={t} />
            </li>
            ))}
      </ul>
      </div>
      );
}


import React from 'react'

const Todo = ({ todoItems }) => {
  return (
    <div>
        <h1>Todo</h1>
        <ol>
            {todoItems.map(({ id, title, description, isCompleted }) => {
                return (
                <li
                    key={id}
                    style={{ color: isCompleted ? "yellowgreen" : "" }}
                >
                    <h1>{title}</h1>
                    <p>{description}</p>
                </li>
                );
            })}
        </ol>
    </div>
  )
}

export default Todo
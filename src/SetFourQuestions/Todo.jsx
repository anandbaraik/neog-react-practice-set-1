import React, { useState } from 'react'

const Todo = ({todoItems}) => {
    const [todos, setTodos] = useState(todoItems);
    const removeTask = (taskId) => {
        const tasks = todos.filter(({id}) => id != taskId);
        setTodos(() => tasks);
    }
    const toggleIsDone = (taskId) => {
        const tasks = todos.map(todo => {
                if(todo.id == taskId) {
                    return {...todo, isDone: !todo.isDone};
                }
                return todo;
            });
        setTodos(tasks);
    }
    const getStyle = (isDone) => {
        return isDone ? { textDecoration: "line-through", color: "red" }
        : null;
    }
  return (
    <div>
        <h1>
            Todo List
        </h1>
        <ul>
            {
                todos.map(({id, task, isDone}) => (
                    <li key={id}
                        style={{
                            marginBottom:"1rem"
                        }}>
                        <span
                            style={getStyle(isDone)}>
                            {task}
                        </span>
                        {" "}
                        <button
                            onClick={() => removeTask(id)}>
                             X
                        </button>
                        {" "}
                        <button
                            onClick={() => toggleIsDone(id)}>
                            Is Done?
                        </button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Todo
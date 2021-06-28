import React from 'react'

function Todo({ todo, todos, setTodos }) {
    const deleteHandler = (e) => {
        const filtered = todos.filter((currentTodoItem) => {
            return currentTodoItem.id !== todo.id
        });
        setTodos(filtered);
    }

    const toggleCompleted = (e) => {
        // setTodos(todos.map((item) => {
        //     if (item.id === todo.id) {
        //         return {
        //             ...item, complete: !item.completed
        //         }
        //     }
        //     return item;
        // }));

        // shouldn't directly modify state, safer to make copy and work with that
        const todosCopy = [...todos]

        const matchingTodo = todosCopy.find(todoItem => todoItem.id === todo.id)
        matchingTodo.completed = !matchingTodo.completed;
        
     
        setTodos(todosCopy);
    }

    return (
        <div className="todo-item">
            <li className={`todo-li-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li>
            <button onClick={toggleCompleted} className="complete-btn"><i class="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i class="fas fa-backspace"></i></button>
        </div>
    )
}

export default Todo

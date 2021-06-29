// import React from 'react'
import React, { useRef } from 'react'
import FlipMove from 'react-flip-move';



function Todo({ todo, todos, setTodos }) {

    const inputTextRef2 = useRef();


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



    const updateHandler = (e) => {
        const todosCopy = [...todos]

        const matchingTodo = todosCopy.find(todoItem => todoItem.id === todo.id)
        // matchingTodo.text = e.target.value;
        matchingTodo.text = inputTextRef2.current.value;


        setTodos(todosCopy);
    }

    return (

            <div className="todo-item">
                <div className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                    <input ref={inputTextRef2} className="todo-edit-input" value={todo.text} onChange={updateHandler}></input>
                </div>

                <button onClick={toggleCompleted} className={todo.completed ? 'undo-btn' : 'check-btn'}>{todo.completed ? <i class="fas fa-undo-alt"></i> : <i class="fas fa-check"></i>}</button>
                <button onClick={deleteHandler} className="remove-btn"><i class="fas fa-eraser"></i></button>
            </div>


    )
}

export default Todo

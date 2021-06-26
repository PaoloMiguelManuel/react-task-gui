import React, { useRef } from 'react'
import { v4 as uuid_v4 } from "uuid";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {

    const inputTextRef = useRef();
    const selectRef = useRef();
    

    const inputTextHandler = (e) => {
        setInputText(inputTextRef.current.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: uuid_v4() }]);
        setInputText('');
    }

    const statusHandler = (e) => {
        // console.log(selectRef.current.value)
        setStatus(selectRef.current.value);
    }

    return (
        <form>
            <input ref={inputTextRef} onChange={inputTextHandler} type="text" className="todo-input" value={inputText} />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select ref={selectRef} onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form >
    )
}

export default Form

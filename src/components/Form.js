import React, { useRef } from 'react'
import { v4 as uuid_v4 } from "uuid";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {

    const inputTextRef = useRef();
    const selectRef = useRef();


    const inputTextHandler = (e) => {
        setInputText(inputTextRef.current.value);
        // console.log(`over here: ${e.target.value}`);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();


        if (inputText === '') {
            return;
        } else {
            setTodos([...todos, { text: inputText, completed: false, id: uuid_v4() }]);
        }
        setInputText('');
    }

    const statusHandler = (e) => {
        // console.log(selectRef.current.value)
        setStatus(selectRef.current.value);
    }

    return (
        <form>
            <div className="input-and-submit-container">
                <input placeholder="Enter Task" ref={inputTextRef} onChange={inputTextHandler} type="text" className="todo-input" value={inputText} />

                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i class="fas fa-plus-circle"></i>
                </button>
            </div>
            {/* <br /> */}
            <div className="select-container">

                <div className="select">
                    <select ref={selectRef} onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incompleted">Incompleted</option>
                    </select>
                </div>
            </div>
        </form >
    )
}

export default Form

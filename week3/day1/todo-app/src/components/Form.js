import React from 'react'

function Form({ setInputText, inputText, todos, setTodos, setStatus }) {

    const inputTextHandler = (e) => {
        e.preventDefault()
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*1000}
        ])
        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            <form>
                <input type="text" value={inputText} className="todo-input" onChange={inputTextHandler} />
                    <button onClick={submitTodoHandler} className="todo-button" type="submit"><i className="fas fa-plus-square"></i></button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form

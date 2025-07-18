import React, { useEffect, useState } from 'react'
import './Todolist.css'
import {BiCheckDouble, BiEdit, BiTrash, BiCheckCircle, BiReset, BiRefresh} from 'react-icons/bi'

function Todolist() {
    const [todos, setTodos] = useState([])
    const [inputvalue, setInputvalue] = useState('')
    const [editIndex, setEditIndex] = useState(-1)

    const addTodo =() => {
        if (inputvalue.trim() !== '') {
            if (editIndex !== -1) {
                const updatedTodos = [...todos]
                updatedTodos[editIndex] = {task: inputvalue, completed: updatedTodos[editIndex].completed}
                setTodos(updatedTodos)
                setInputvalue('')
                setEditIndex(-1)
            }else {
                setTodos([...todos, {task: inputvalue, completed: false}])
                setInputvalue('')
            }
        }
    }

    const startEdit = (index) => {
        setInputvalue(todos[index].task)
        setEditIndex(index)
    }

    const cancelEdit = () => {
        setInputvalue('')
        setEditIndex(-1)
    }

    const removeTodo = (index) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            const updatedTodos = todos.filter((_, i) => i !== index)
            setTodos(updatedTodos)
        } 
    }

    const toggleCompleted = (index) => {
        const updatedTodos = [...todos]
        updatedTodos[index].completed = !updatedTodos[index].completed
        setTodos(updatedTodos)
    } 

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos')
        console.log('Loaded from localStorage:', storedTodos)
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos))
        }
    }, [])

    useEffect(() => {
        console.log('Saving todos to localStorage:', todos)
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

  return (
    <div>
        <div className="todo-container">
            <h1>To-Do List</h1>
            <div className="input-section">
                <input type="text"value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                placeholder='Enter a new Task'
                className="input-field" />

                {editIndex !== -1 ? (
                    <>
                    <button className="update-btn" onClick={addTodo}><BiCheckDouble /></button>
                    <button className="cancel-btn" onClick={cancelEdit}><BiRefresh /></button>
                    </>
                ) : (
                    <button className="add-btn" onClick={addTodo}>Add</button>
                )}

                {todos.length > 0 ? <button className="clear-all-btn" onClick={() => setTodos([])}>Clear All</button> : null}

            </div>
            <div>
                {todos.length === 0 ? <p className="empty-msg">No tasks yet. Add one!</p> : null}
                <ul className="todo-list">
                    {
                        todos.map((todo, index) => (
                            <li key={index} className={todo.completed ? "completed" : ""}>
                                    {todo.task}
                                    <div className="btn-group">
                                        <button className="btn-edit" onClick={() => startEdit(index)}><BiEdit /></button>
                                        <button className="btn-remove" onClick={() => removeTodo(index)}><BiTrash /></button>
                                        <button className="btn-done" onClick={() => toggleCompleted(index)}>
                                            {todo.completed ? <BiReset /> : <BiCheckCircle />}
                                        </button>
                                    </div>
                            </li>
                        ))
                    }
                </ul>
                </div>
        </div>
    </div>
  )
}

export default Todolist

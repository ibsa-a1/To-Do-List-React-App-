import React from 'react'
import './Todolist.css'

function Todolist() {
  return (
    <div>
        <div className="todo-container">
            <h1>To-Do List</h1>
            <div className="input-section">
                <input type="text" className="input-field" />
            </div>
        </div>
    </div>
  )
}

export default Todolist

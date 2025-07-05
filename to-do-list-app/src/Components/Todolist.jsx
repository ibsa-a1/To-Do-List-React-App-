import React from 'react'
import './Todolist.css'
import {BiCheckDouble, BiEdit, BiTrash, BiCheckCircle, BiReset, BiRefresh} from 'react-icons/bi'

function Todolist() {
  return (
    <div>
        <div className="todo-container">
            <h1>To-Do List</h1>
            <div className="input-section">
                <input type="text" className="input-field" />
                <>
                <button className="update-btn"><BiCheckDouble /></button>
                <button className="cancel-btn"><BiRefresh /></button>
                <button className="add-btn">Add</button>
                </>
            </div>
        </div>
    </div>
  )
}

export default Todolist

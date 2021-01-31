import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Tasks = ({ tasks, onDelete, onDoubleClick }) => {
    return (
        <>
            {tasks.map((task) => (
                <div key={task.id} className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onDoubleClick(task.id)}>
                    <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursor: 'pointer' }} /></h3>
                    <p>{task.day}</p>
                </div>
            ))}
        </>
    )
}

export default Tasks

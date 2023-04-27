import react from 'react'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faPenToSquare } from  '@fortawesome/free-solid-svg-icons'
import  { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {

    retun (
        <div className="Todo">
           <p classname={`${task.completed ? 'completed' : ""}`} onClick={() => toggleCompleated(task.id)}>{task.task}</p>
           <div>
            <fontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
           </div>
        </div>
    )
}

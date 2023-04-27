import react from 'React'
export const EditTodoForm = ({editTodo, task }) => {
    const [ Value, setValue] = useState(task.task);
    const handleSubmit = (e) => {
        //prevent default action
        e.preventDefault();
        //edit todo
        editTodo(value, task.id);
    };
    return (
        <form onSubmit={handleSubmit} className="todoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='update task' />
            <button type="submit" className='todo-btn'></button>
        </form>
    )
}
import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={ onDelete } onToggle={ onToggle }></Task>
            ))}
        </div>
    )
}

Tasks.defaultProps = {
    tasks: []
}

export default Tasks
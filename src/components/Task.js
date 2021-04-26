import { FaTimes } from 'react-icons/fa'
import { toggleReminder } from '../redux'

const Task = ({ task, removeTask }) => {

	return(
		<div className={`task ${task.reminder ? ('reminder'):('')}`} onDoubleClick={() => toggleReminder(task.id)}>
			<h3>
			   {task.text} 
			   <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => removeTask(task.id)} />
			</h3>
			<p>{task.day}</p>
		</div>

	)
}

export default Task

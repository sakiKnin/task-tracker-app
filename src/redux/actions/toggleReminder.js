import store from '../store'
import {fetchTask} from './fetchTask'
import { reminderToggled } from '../reducersTypes'

export const toggleReminder = async (id) => {

	const taskToToggle = await fetchTask(id)

	const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

	const res = await fetch(`http://localhost:5000/tasks/${id}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
					},
				body: JSON.stringify(updatedTask)
				})

	const data = await res.json()

	store.dispatch({
		type: reminderToggled,
		payload: {
			id:id
		}

	})
		
	return data
	
}

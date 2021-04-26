import store from '../store'
import { taskAdded } from '../reducersTypes'

export const addTask = async (task) => {

	const res = await fetch(`http://localhost:5000/tasks`,{
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
			},
		body: JSON.stringify(task)
	})

	const data = await res.json()

	store.dispatch({
		type: taskAdded,
		payload: {
			task: data
		}
	})

	return await data


}



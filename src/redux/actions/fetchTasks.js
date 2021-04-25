import store from '../store'

import { tasksAdded } from '../reducersTypes'

export const fetchTasks = async () => {
	const res = await fetch('http://localhost:5000/tasks')
	
	const data = await res.json()

	console.log(data)

	store.dispatch({
		type: tasksAdded,
		payload:{
			tasks:data
		}
		
	})
	 
	return await data
}

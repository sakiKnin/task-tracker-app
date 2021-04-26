import store from '../store'
import { taskRemoved } from '../reducersTypes'

export const removeTask = async (id) => {
	await fetch(`http://localhost:5000/tasks/${id}`,{
				method: 'DELETE'
	})
	 
	store.dispatch({
		type: taskRemoved,
		payload: {
			id:id
		}
	})
	
	 
}

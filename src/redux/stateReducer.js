import { tasksAdded, taskAdded, taskRemoved, reminderChanged } from './reducersTypes'

function stateReducer( state=[], action ){

		switch (action.type) {

			case tasksAdded:
				return [...state, action.payload.tasks]
			case taskAdded:
				return [...state, action.payload.task]
			case taskRemoved:
				return state.filter(task => task.id!==action.payload.id)
			case reminderChanged:
				return state.map(task => (task.id === action.payload.id)?{...task, reminder: !task.reminder}:task)	 	
			default:
				return state
	}
}

export default stateReducer

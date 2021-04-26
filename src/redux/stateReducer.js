import { tasksAdded, taskAdded, taskRemoved, reminderToggled } from './reducersTypes'

function stateReducer( state=[], action ){
	switch (action.type) {
		case tasksAdded:
			return [...state, action.payload.tasks]
		case taskAdded:
			return [[...state[0], action.payload.task]]
		case taskRemoved:
			return [state[0].filter(task => task.id!==action.payload.id)]
		case reminderToggled:
			return [state[0].map(task => (task.id === action.payload.id)?{...task, reminder: !task.reminder}:task)]	 	
		default:
			return state
	}
}

export default stateReducer

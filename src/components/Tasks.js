import Task from './Task'

import store from '../redux/store'

const  Tasks = () => {
	
	console.log(store.getState().show)	

	return(
		<>
		{store.getState().state[0].map((task) => (<Task key={task.id} task={task}/>))}
		
		</>
	)
	
}

export default Tasks

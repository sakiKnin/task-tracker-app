import Task from './Task'
import { connect } from 'react-redux'
 
import { removeTask } from '../redux'

const  Tasks = ({tasks}) => {

	return(
		<>
		  { tasks.map((task) => (<Task key={task.id} task={task} removeTask={removeTask}/>)) }
		</>
	)
	
}

const mapStateToProps = state => {
	return {
		tasks: state.state[0]
	}
}

export default connect(
	mapStateToProps 
)(Tasks)

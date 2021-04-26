import './App.css';
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

import { fetchTasks } from './redux'

import { connect } from 'react-redux'
 
import { useEffect, useState } from 'react'

function App({show}) {

  const [ tasks, setTasks ] = useState([])

  useEffect( () => {

		const getData = async () => {
			
			const tasksFromServer = await fetchTasks()

			setTasks(tasksFromServer)

		}

		getData()

	}, [] )

  return (
	 
	  	<div className="container">
	      		<Header />
			{show?<AddTask/>:''}
	      		{tasks.length > 0 ? (<Tasks/>):"No tasks for you..."}
          	</div>
	 
  );
}

const mapStateToProps = state => {
	return {
		show: state.show		
	}
}

export default connect(
	mapStateToProps
)(App)

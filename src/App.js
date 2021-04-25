import './App.css';
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

import { fetchTasks } from './redux'

import { Provider } from 'react-redux'
import store from './redux/store'

import { useEffect, useState } from 'react'

function App() {

  const [ tasks, setTasks ] = useState([])

  useEffect( () => {

		const getData = async () => {
			
			const tasksFromServer = await fetchTasks()

			setTasks(tasksFromServer)

		}

		getData()

		console.log(tasks)

	}, [] )

  return (
	<Provider store={store}>
	  	<div className="container">
	      		<Header/>
			<AddTask/>
	      		{tasks.length > 0 ? (<Tasks/>):"No tasks for you..."}
          	</div>
	</Provider>
  );
}

export default App;

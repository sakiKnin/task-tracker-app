export const fetchTask = async (id) => {
	
	const result = await fetch(`http://localhost:5000/tasks/${id}`, {
				method:'GET'
	}) 

	const data = await result.json()

	return await data
} 

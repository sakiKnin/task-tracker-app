import { buttonToggled } from './reducersTypes'

function showReducer( state=false, action ){
	switch(action.type){
		case buttonToggled:
			return !state
		default:
			return state
	}
}

export default showReducer

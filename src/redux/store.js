import { createStore, combineReducers } from 'redux'

import stateReducer from './stateReducer'
import showReducer from './showReducer'


const rootReducer = combineReducers({
	state: stateReducer,
	show: showReducer 
})

const store = createStore(rootReducer)

export default store

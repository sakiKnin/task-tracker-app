import store from '../store'

import { buttonToggled } from '../reducersTypes'

export const toggleButton = () =>{
	store.dispatch({
		type: buttonToggled
	})
}

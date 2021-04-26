import Button from './Button'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {toggleButton} from '../redux'

const Header = ({ show }) => {

     return(
             <header className='header'>
			<h1> Task Tracker </h1>
	     		<Button color={show?'red':'green'} 
				text={show?'Close':'Add task'} 
				onClick={toggleButton}
			/>
	     </header>
	   )		   
}

Button.defaultProps = {
	color: 'steelblue'
}

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	return {
		show: state.show
	}
}
/*
const mapDispatchToProps = dispatch => {
	return {
		toggleButton: () => dispatch(toggleButton)
	}

}
*/
export default connect(
	mapStateToProps,
	//mapDispatchToProps
)(Header)

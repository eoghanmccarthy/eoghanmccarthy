import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index'

// Import components
import Button from './Button';
import Menu from './Menu';

// Import data
import menudata from 'json-loader!../data/menudata.json';

class App extends Component {

	render(){

		return (

			<div className="nav nav-global">

				<Button
					buttonClass="open"
					onClick={ this.props.toggleGlobalNavigation }
				/>

				{ this.props.globalNavActive === true &&
					<div className="nav-global__modal">

						<Menu menu={ menudata.data } />

						<Button
							buttonClass="close"
							onClick={ this.props.toggleGlobalNavigation }
						/>

				 	</div>
				}

			</div>

		)
	}
}

const mapStateToProps = state => {
	return {
		globalNavActive: state.globalNavActive.globalNavActive
	}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

console.log(actionCreators)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

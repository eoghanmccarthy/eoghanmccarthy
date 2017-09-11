import React, { Component } from 'react';

export default class Button extends Component {

	render(){

		return (

			<div className={ "nav-global__toggle " + this.props.buttonClass } onClick={ this.props.onClick }>
	 			<div className="bars">
	 				<span></span>
	 				<span></span>
	 				<span></span>
	 			</div>
		 	</div>

		);
	}
}

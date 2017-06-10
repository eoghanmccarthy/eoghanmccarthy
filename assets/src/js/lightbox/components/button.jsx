import React from 'react';

export default class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className={ "btn " + this.props.buttonClass } onClick={ this.props.onClick }>
	 			<div className="bars">
	 				<span></span>
	 				<span></span>
	 			</div>
		 	</div>
		);
	}
}

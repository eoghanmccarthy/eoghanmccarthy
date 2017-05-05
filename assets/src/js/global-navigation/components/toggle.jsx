import React from 'react';
import ReactDOM from 'react-dom';

export default class Toggle extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className={"nav-global__toggle " + this.props.toggleClass} onClick={this.props.onClick}>
	 			<div className="bars">
	 				<span></span>
	 				<span></span>
	 				<span></span>
	 			</div>
		 	</div>
		);
	}
}

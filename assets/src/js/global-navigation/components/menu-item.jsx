import React from 'react';
import ReactDOM from 'react-dom';

export default class MenuItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<li><a href={this.props.href}>{this.props.label}</a></li>
		);
	}
}

import React, { Component } from 'react';

export default class MenuItem extends Component {

	render(){

		return (

			<li><a href={ this.props.href }>{ this.props.label }</a></li>
			
		);
	}
}

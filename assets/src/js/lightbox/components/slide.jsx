import React from 'react';

export default class Slide extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className={this.props.status} style={{backgroundImage: `url(${this.props.background})`}}>
				<span className="slide__meta">{this.props.caption}</span>
			</div>
		);
	}
}

import React from 'react';

export default class Slide extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className={ this.props.class } style={ {backgroundImage: `url(${this.props.background})`} }>
				<span className="slide__caption">{ this.props.caption }</span>
			</div>
		);
	}
}

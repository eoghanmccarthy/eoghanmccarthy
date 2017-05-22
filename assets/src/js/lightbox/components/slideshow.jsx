import React from 'react';

// Import components
import Slide from './slide';

export default class SlideShow extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				{this.props.gallery.map(function(img){
					return <Slide
								key={img.id}
								status={this.props.status}
								background={img.background}
								caption={img.caption} />
				}.bind(this))}
			</div>
		);
	}
}

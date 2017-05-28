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
				{this.props.slides.map(function(img){
					return <Slide
								key={img.id}
								class={img.class}
								background={img.background}
								caption={img.caption} />
				}.bind(this))}
			</div>
		);
	}
}

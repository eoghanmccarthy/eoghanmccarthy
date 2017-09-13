import React from 'react';

// Import components
import SlideStack from './SlideStack';
import Button from './Button';

export default class Viewer extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){

		let i;
		const SLIDES = new Array();
		let gallery = this.props.gallery;
		for (i = 0; i < gallery.length; i++) {
			let img;
			let src = gallery[i].getAttribute('src');
			let title = gallery[i].getAttribute('title');
			img = {
				id: i,
				class: 'slide',
				background: src,
				caption: title
			}
			gallery[i].addEventListener('click', this.props.setIndex.bind(null, i));
			gallery[i].addEventListener('click', this.props.openModal);
			// Append slide
			SLIDES.push(img);
		}

		let j = this.props.slideIndex;
		SLIDES[j].class = 'slide active';

		return (
			<div className="viewer">
				<SlideStack slides={ SLIDES } />
				<div className="btn-group btn-group__nav">
		 			<Button
						buttonClass="btn__nav btn__nav--prev"
						onClick={ this.props.slideIndexDecrement }
					/>
					<Button
						buttonClass="btn__nav btn__nav--next"
						onClick={ this.props.slideIndexIncrement }
					/>
			 	</div>
		 	</div>
		);
	}
}

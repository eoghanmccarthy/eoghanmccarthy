import React from 'react';

// Import components
import SlideShow from './slideshow';
import Button from './button';

export default class Viewer extends React.Component {
	constructor(props) {
		super(props);
		this.decrementIndex = this.decrementIndex.bind(this);
		this.incrementIndex = this.incrementIndex.bind(this);
		this.state = {
			gallery: this.props.gallery,
			index: 0
		};
	}
	// Navigate to previous slide
	decrementIndex() {
		this.setState({
			index: (this.state.index - 1)
		})
	}
	// Navigate to next slide
	incrementIndex() {
		this.setState({
			index: (this.state.index + 1)
		})
	}
	// Open slideshow on clicked gallery image
	toTop(i) {
		this.setState({
			index: i
		})
	}

	componentWillUpdate(nextProps, nextState) {
		let gallery = this.state.gallery;
		if (nextState.index > gallery.length -1) {
			this.setState({
				index: 0
			})
		}
		if (nextState.index < 0) {
			this.setState({
				index: gallery.length -1
			})
		}
	}

	render(){

		let i;
		let SLIDES = new Array();
		let gallery = this.state.gallery;
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
			gallery[i].onclick = this.toTop.bind(this, i);
			// Append slide
			SLIDES.push(img);
		}

		let j = this.state.index;
		SLIDES[j].class = 'slide active'

		return (
			<div className="viewer">
				<SlideShow slides={SLIDES} />
				<div className={"btn-group btn-group__nav"}>
		 			<Button buttonClass={"btn__nav btn__nav--prev"} onClick={this.decrementIndex} />
					<Button buttonClass={"btn__nav btn__nav--next"} onClick={this.incrementIndex} />
			 	</div>
		 	</div>
		);
	}
}

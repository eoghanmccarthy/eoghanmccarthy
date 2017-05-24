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
			index: 0,
			status: 'slide active'
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
	// Navigate to next slide
	toTop(i) {
		this.setState({
			index: i
		})
	}

	render(){

		let i;
		let SLIDES = new Array();
		let gallery = document.querySelectorAll('figure img');
		for (i = 0; i < gallery.length; i++) {
			let img;
			let src = gallery[i].getAttribute('src');
			let title = gallery[i].getAttribute('title');
			img = {
				id: i,
				background: src,
				caption: title
			}
			gallery[i].onclick = this.toTop.bind(this, i);
			// Append slide
			SLIDES.push(img);
		}

		if (this.state.index > gallery.length -1) {
			this.setState({
				index: 0
			})
		}

		if (this.state.index < 0) {
			this.setState({
				index: gallery.length -1
			})
		}

		console.log(SLIDES[this.state.index]);

		return (
			<div className="viewer">
				<SlideShow gallery={SLIDES} status={this.state.status}/>
				<div className={"btn-group btn-group__nav"}>
		 			<Button buttonClass={"btn__nav btn__nav--prev"} onClick={this.decrementIndex} />
					<Button buttonClass={"btn__nav btn__nav--next"} onClick={this.incrementIndex} />
			 	</div>
		 	</div>
		);
	}
}

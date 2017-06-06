import React from 'react';

// Import components
import SlideStack from './slidestack';
import Button from './button';

export default class Viewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gallery: this.props.gallery,
			index: 0
		};
	}
	// Navigate through slides
	indexChange(i) {
		this.setState({
			index: (this.state.index + i)
		})
	}
	// Open on clicked gallery image
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
		const SLIDES = new Array();
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
			gallery[i].addEventListener("click", this.toTop.bind(this, i));
			gallery[i].addEventListener("click", this.props.openModal);
			// Append slide
			SLIDES.push(img);
		}

		let j = this.state.index;
		SLIDES[j].class = 'slide active';

		return (
			<div className="viewer">
				<SlideStack slides={SLIDES} />
				<div className={"btn-group btn-group__nav"}>
		 			<Button
						buttonClass={"btn__nav btn__nav--prev"}
						onClick={function() {this.indexChange(-1)}.bind(this)}
					/>
					<Button
						buttonClass={"btn__nav btn__nav--next"}
						onClick={function() {this.indexChange(1)}.bind(this)}
					/>
			 	</div>
		 	</div>
		);
	}
}

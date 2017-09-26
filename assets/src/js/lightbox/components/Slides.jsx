import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index'

class Slides extends Component {

	render() {

		const { gallery, slideIndex } = this.props;
		
		let i;
		const STACK = new Array();
		let images = gallery;
		
		for (i = 0; i < images.length; i++) {
			let img;
			let src = images[i].getAttribute('src');
			let title = images[i].getAttribute('title');
			img = {
				id: i,
				class: '',
				background: src,
				caption: title
			}

			STACK.push(img);

			if (i === slideIndex) {
				img.class = 'slide active'
			} else {
				img.class = 'slide'
			}
		}

		return (
			<div>
				{ STACK.map(function(img){
					return (
						<div key={ img.id } className={ img.class } style={{ backgroundImage: `url(${ img.background })` }}>
							<span className="slide__caption">{ img.caption }</span>
						</div>
					);
				}.bind(this)) }
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		gallery: state.slides.gallery,
		slideIndex: state.slides.slideIndex
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Slides);
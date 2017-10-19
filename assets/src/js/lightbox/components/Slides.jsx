import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index'

class Slides extends Component {

	render() {

		const { gallery, slideIndex } = this.props;
		
		let STACK = new Array();
		
		for (let i = 0; i < gallery.length; i++) {
			let img;
			let src = gallery[i].getAttribute('src');
			let title = gallery[i].getAttribute('title');
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
				{ STACK.map((img) =>
                    <div
                        key={ img.id }
                        className={ img.class }
                        style={{ backgroundImage: `url(${ img.background })` }} >
                        <span className="slide__caption">{ img.caption }</span>
                    </div>
                )}
                {/* { gallery.map((item, index) =>
                    <div
                        key={ index }
                        className={ 'slide' + index === slideIndex && ' active' }
                        style={{ backgroundImage: `url(${ item[i].getAttribute('src') })` }} >
                        <span className="slide__caption">{ item[i].getAttribute('title') }</span>
                    </div>
                )} */}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
        gallery: state.gallery,
		slideIndex: state.slideIndex
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Slides);
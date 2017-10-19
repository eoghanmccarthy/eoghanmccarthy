import React, { Component } from 'react'

// Import components
import Slides from './Slides'
import Navigation from './Navigation'
import Button from './Button'

// Import content
const content = document.querySelectorAll('figure img');

export default class Modal extends Component {

    componentWillMount() {
        this.props.initialiseGallery(content);
    }
	
	render() {

		const { visible, toggleVisibility, gallery, slideIndexSet } = this.props;

		let i;
		for (i = 0; i < gallery.length; i++) {
			gallery[i].addEventListener('click', slideIndexSet.bind(null, i));
			gallery[i].addEventListener('click', toggleVisibility);
		}

		return (

			<div>

			{ visible === true &&
			
				<div className="lightbox">
					<Slides />
					<Navigation />

					<div className="btn-group btn-group__close">
						<Button
							buttonClass="btn__close"
							onClick={ toggleVisibility }
						/>
					</div>
				</div>
			}

			</div>
		)
	}
}

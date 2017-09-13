import React from 'react';

// Import components
import Viewer from './Viewer';
import Button from './Button';

const Modal = ({ lightboxActive, toggleLightbox, gallery, slideIndex, slideIndexSet, slideIndexDecrement, slideIndexIncrement }) => {

	return (
		<div className={ lightboxActive ? "lightbox active" : "lightbox" }>
			<Viewer 
				setIndex={ slideIndexSet }
				openModal={ toggleLightbox }
				slideIndexDecrement={ slideIndexDecrement }
				slideIndexIncrement={ slideIndexIncrement }
				gallery={ gallery }
				slideIndex={ slideIndex }
			/>
			<div className="btn-group btn-group__close">
				<Button
					buttonClass="btn__close"
					onClick={ toggleLightbox }
				/>
			</div>
		</div>
	)
}

export default Modal

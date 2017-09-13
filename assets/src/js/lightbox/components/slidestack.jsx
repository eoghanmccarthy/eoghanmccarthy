import React from 'react';

// Import components
import Slide from './Slide';

const SlideStack = ({ slides }) => {

	return (
		<div>
			{ slides.map(function(img){
				return <Slide
							key={ img.id }
							slideClass={ img.class }
							background={ img.background }
							caption={ img.caption } />
			}.bind(this)) }
		</div>
	);
}

export default SlideStack;

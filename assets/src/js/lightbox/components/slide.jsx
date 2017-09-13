import React from 'react';

const Slide = ({ slideClass, background, caption }) => {

	return (
		<div className={ slideClass } style={{ backgroundImage: `url(${ background })` }}>
			<span className="slide__caption">{ caption }</span>
		</div>
	);
}

export default Slide;

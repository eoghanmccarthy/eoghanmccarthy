import React from 'react';

const Button = ({ buttonClass, onClick }) => {
	
	return (
		<div className={ "nav-global__toggle " + buttonClass } onClick={ onClick }>
			<div className="bars">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
}

export default Button

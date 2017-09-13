import React from 'react';

const Button = ({ buttonClass, onClick }) => {

	return (
		<div className={ "btn " + buttonClass } onClick={ onClick }>
 			<div className="bars">
 				<span></span>
 				<span></span>
 			</div>
	 	</div>
	);
}

export default Button;

import React from 'react';

const Button = props => {
	return (
		<div className={ "btn " + props.buttonClass } onClick={ props.onClick }>
 			<div className="bars">
 				<span></span>
 				<span></span>
 			</div>
	 	</div>
	);
}

export default Button;

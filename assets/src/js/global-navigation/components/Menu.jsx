import React, { Component } from 'react';

// Import components
import MenuItem from './MenuItem';

export default class Menu extends Component {

	render(){

		return (

			<nav>

				<ul className="nav-global__menu">
					{ this.props.menu.map(function(item){
						return <MenuItem
									key={ item.id }
									href={ item.href }
									label={ item.label } />
					}.bind(this)) }
				</ul>
				
			</nav>

		);
	}
}

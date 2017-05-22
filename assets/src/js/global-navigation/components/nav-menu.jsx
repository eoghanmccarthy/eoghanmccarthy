import React from 'react';

// Import components
import MenuItem from './menu-item';

export default class NavMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<nav>
				<ul className="nav-global__menu">
					{this.props.menu.map(function(item){
						return <MenuItem
									key={item.id}
									href={item.href}
									label={item.label} />
					}.bind(this))}
				</ul>
			</nav>
		);
	}
}

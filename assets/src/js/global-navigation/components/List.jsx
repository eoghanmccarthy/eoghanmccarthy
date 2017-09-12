import React from 'react';

// Import components
import ListItem from './ListItem';

const List = ({ list }) => {

	return (
		<nav>
			<ul className="nav-global__menu">
				{ list.map(function(item){
					return <ListItem
								key={ item.id }
								href={ item.href }
								label={ item.label } />
				}.bind(this)) }
			</ul>
		</nav>
	);
}

export default List

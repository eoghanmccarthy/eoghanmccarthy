import React from 'react';

// Import data
import listdata from '../data/listdata.json';

// List data
const data = listdata.data;

const List = () => {

	return (
		<nav>
			<ul className="nav-global__menu">
				{ data.map((item, index) =>
                    <li key={ index }>
                        <a href={ item.href } data-text={ item.label }>{ item.label }</a>
                    </li>
                )}
			</ul>
		</nav>
	);
}

export default List

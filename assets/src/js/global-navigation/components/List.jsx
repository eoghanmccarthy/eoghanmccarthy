import React from 'react';

// Import data
import listdata from 'json-loader!../data/listdata.json';

// List data
const data = listdata.data;

const List = () => {

	return (
		<nav>
			<ul className="nav-global__menu">
				{ data.map((item) =>
                    <li key={ item.id }>
                        <a href={ item.href }>{ item.label }</a>
                    </li>
                )}
			</ul>
		</nav>
	);
}

export default List

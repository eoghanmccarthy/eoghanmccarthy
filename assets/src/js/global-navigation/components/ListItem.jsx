import React from 'react';

const ListItem = ({ href, label }) => {

	return (
		<li><a href={ href }>{ label }</a></li>
	);
}

export default ListItem

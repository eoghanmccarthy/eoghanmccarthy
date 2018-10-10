import React from "react";

import listdata from "app/config/globalNavigationList.json";

const data = listdata.data;

const List = () => {
  return (
    <nav>
      <ul className="nav-global__menu">
        {data.map((item, index) => (
          <li key={index}>
            <a href={item.href} data-text={item.label}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default List;

import React from "react";
import { Link } from "react-router-dom";

import listdata from "app/config/globalNavigationList.json";

const data = listdata.data;

const List = () => {
  return (
    <nav>
      <ul className="nav-global__menu">
        {data.map((item, index) => (
          <li key={index}>
            <Link to="/japan">
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default List;

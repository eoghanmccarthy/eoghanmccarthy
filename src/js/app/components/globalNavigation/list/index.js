import React from "react";
import { Link } from "react-router-dom";

import data from "app/config/globalNavigationData";

const List = () => {
  return (
    <nav>
      <ul className="nav-global__menu">
        {data.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default List;

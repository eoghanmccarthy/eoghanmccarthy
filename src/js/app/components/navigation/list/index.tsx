import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import data from "app/config/navigationData";

const List: React.FunctionComponent<{
  toggleVisibility: () => void;
}> = ({ history, toggleVisibility }) => {
  const _route = (route: string) => {
    history.push(route);
    toggleVisibility();
  };

  return (
    <nav>
      <ul className="nav-global__menu">
        {data.map((item: { route: string; label: string }, index: number) => (
          <li key={index}>
            <a onClick={() => _route(item.route)}>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(List);

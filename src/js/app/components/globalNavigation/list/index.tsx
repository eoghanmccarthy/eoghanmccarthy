import React from "react";
import { withRouter } from "react-router";

import data from "app/data/navigationData";

const List: React.FunctionComponent<{
  history: any;
  toggleVisibility: () => void;
}> = ({ history, toggleVisibility = null }) => {
  const _route = (route: string) => {
    history.push(route);
    toggleVisibility();
  };

  return (
    <nav>
      {data.map((item: { route: string; label: string }, index: number) => (
        <a key={index} onClick={() => _route(item.route)}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default withRouter(List);

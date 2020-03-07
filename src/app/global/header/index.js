import React from "react";
import { withRouter } from "react-router";
import "./styles.scss";

import Logo from "componentLib/logo";
import GlobalNavigation from "global/navigation";

const Header = ({ location }) => {
  return (
    <header
      style={{ height: location.pathname === "/" ? window.innerHeight : 280 }}
      className={"me__header"}
    >
      <Logo />
      <GlobalNavigation />
    </header>
  );
};

export default withRouter(Header);

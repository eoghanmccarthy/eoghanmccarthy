import React from "react";

import Logo from "componentLib/logo";
import GlobalNavigation from "global/navigation";

const Header = () => {
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

export default Header;

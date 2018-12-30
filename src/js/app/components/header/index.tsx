import React from "react";

import Logo from "components/logo";
import Navigation from "components/globalNavigation";

const Header: React.FunctionComponent<{}> = () => (
  <header className={"me__header"}>
    <div className={"header__logo"}>
      <Logo />
    </div>
    <div className={"header__nav"}>
      <Navigation />
    </div>
  </header>
);

export default Header;

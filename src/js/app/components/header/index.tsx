import React from "react";

import Logo from "components/logo";
import GlobalNavigation from "components/globalNavigation";

const Header: React.FunctionComponent<{}> = () => (
  <header className={"me__header"}>
    <Logo />
    <GlobalNavigation />
  </header>
);

export default Header;

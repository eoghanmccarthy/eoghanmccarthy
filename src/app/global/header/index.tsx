import React from "react";
import { withRouter } from "react-router";

import GlobalNavigation from "global/navigation";

const Header: React.FunctionComponent<{ history: any }> = ({ history }) => (
  <header className={"me__header"}>
    <Logo className={"logo"} fill={"#f0f"} onClick={() => history.push("/")} />
    <GlobalNavigation />
  </header>
);

export default withRouter(Header);

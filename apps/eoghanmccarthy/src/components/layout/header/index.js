import React from "react";
import { useHistory } from "react-router-dom";
import { Spacer } from "@eoghanmccarthy/ui";

import Logo from "components/logo";
import Navigation from "components/navigation";

export const Header = () => {
  const history = useHistory();

  return (
    <header className={"me__header"}>
      <Logo onClick={() => history.push("/")} />
      <Spacer size={"md"} />
      <Navigation />
    </header>
  );
};

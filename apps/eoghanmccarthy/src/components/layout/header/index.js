import React from "react";
import { useHistory } from "react-router-dom";
import { Spacer } from "@eoghanmccarthy/ui";

import { useDialogsContext } from "components/dialogsProvider/useDialogsContext";
import * as IconButtons from "components/iconButtons";
import Logo from "components/logo";

export const Header = () => {
  const history = useHistory();
  const dialog = useDialogsContext();

  return (
    <header className={"me__header"}>
      <Logo onClick={() => history.push("/")} />
      <Spacer size={"md"} />
      <IconButtons.Open onClick={() => dialog.open("navigation")} />
    </header>
  );
};

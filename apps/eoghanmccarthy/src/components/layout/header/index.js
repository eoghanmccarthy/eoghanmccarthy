import React from "react";
import { useHistory } from "react-router-dom";
import { useDialogsContext, Spacer } from "@eoghanmccarthy/ui";

import * as IconButtons from "components/iconButtons";
import Logo from "components/logo";
import NavigationModal from "../../../modals/navigation";

export const Header = () => {
  const history = useHistory();
  const dialog = useDialogsContext();

  return (
    <header className={"me__header"}>
      <Logo onClick={() => history.push("/")} />
      <Spacer size={"md"} />
      <IconButtons.Open onClick={() => dialog.open(<NavigationModal />)} />
    </header>
  );
};

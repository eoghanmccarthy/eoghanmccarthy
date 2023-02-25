import React from "react";
import { useNavigate } from "react-router-dom";
import { useDialogsContext, Spacer } from "@eoghanmccarthy/ui";

import * as IconButtons from "components/iconButtons";

import Logo from "components/logo";
import NavigationModal from "features/navigation";

export const Header = () => {
  const navigate = useNavigate();
  const dialog = useDialogsContext();

  return (
    <header className={"me__header"}>
      <Logo onClick={() => navigate("/")} />
      <Spacer />
      <IconButtons.Open onClick={() => dialog.open(<NavigationModal />)} />
    </header>
  );
};

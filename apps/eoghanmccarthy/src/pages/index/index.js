import React from "react";
import { useHistory } from "react-router-dom";
import { Spacer } from "@eoghanmccarthy/ui";

import { useDialogsContext } from "components/dialogsProvider/useDialogsContext";
import { Main } from "components/layout";
import Logo from "components/animatedLogo";
import * as IconButtons from "components/iconButtons";

const Page = () => {
  const history = useHistory();
  const dialog = useDialogsContext();

  return (
    <div className={"me index"}>
      <Main>
        <Logo onClick={() => history.push("/")} />
        <Spacer size={"md"} />
        <IconButtons.Open onClick={() => dialog.open("navigation")} />
      </Main>
    </div>
  );
};

export default Page;

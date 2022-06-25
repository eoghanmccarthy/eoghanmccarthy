import React from "react";
import { useHistory } from "react-router-dom";
import { Spacer } from "@eoghanmccarthy/ui";

import { useDialogsContext } from "@eoghanmccarthy/ui";
import { Main } from "components/layout";
import Logo from "components/animatedLogo";
import * as IconButtons from "components/iconButtons";
import NavigationModal from "../../modals/navigation";

const Page = () => {
  const history = useHistory();
  const dialog = useDialogsContext();

  return (
    <div className={"me index"}>
      <Main>
        <Logo onClick={() => history.push("/")} />
        <Spacer size={"md"} />
        <IconButtons.Open onClick={() => dialog.open(<NavigationModal />)} />
      </Main>
    </div>
  );
};

export default Page;

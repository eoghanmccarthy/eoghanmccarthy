import React from "react";
import { Spacer } from "@eoghanmccarthy/ui";

import { useDialogsContext } from "@eoghanmccarthy/ui";
import { Main } from "components/layout";
import Logo from "components/animatedLogo";
import * as IconButtons from "components/iconButtons";
import NavigationModal from "../../modals/navigation";

const Page = () => {
  const dialog = useDialogsContext();

  return (
    <div className={"me index"}>
      <Main>
        <Logo />
        <Spacer />
        <IconButtons.Open onClick={() => dialog.open(<NavigationModal />)} />
      </Main>
    </div>
  );
};

export default Page;

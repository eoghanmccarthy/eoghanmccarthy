import React from "react";
import { useHistory } from "react-router-dom";
import { Spacer } from "@eoghanmccarthy/ui";

import { Main } from "components/layout";
import Logo from "components/animatedLogo";
import Navigation from "components/navigation";

const Page = () => {
  const history = useHistory();

  return (
    <div className={"me index"}>
      <Main>
        <Logo onClick={() => history.push("/")} />
        <Spacer size={"md"} />
        <Navigation />
      </Main>
    </div>
  );
};

export default Page;

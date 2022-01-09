import React from "react";
import { useHistory } from "react-router-dom";

import { Main } from "components/layout";
import Logo from "components/animatedLogo";
import GlobalNavigation from "global/navigation";

const Page = () => {
  const history = useHistory();

  return (
    <div className={"me index"}>
      <Main>
        <Logo onClick={() => history.push("/")} />
        <GlobalNavigation />
      </Main>
    </div>
  );
};

export default Page;

import React, { Fragment, useState } from "react";

import { Dialog } from "eoghandotio-ui";
import NavButton from "components/globalNavigation/button";
import List from "components/globalNavigation/list";

const GlobalNavigation: React.FunctionComponent<{}> = () => {
  const [isVisible, toggleVisibility] = useState(false);

  const _toggleVisibility = () => {
    toggleVisibility(!isVisible);
  };

  return (
    <Fragment>
      <NavButton onClick={_toggleVisibility} />
      <Dialog
        id={"navGlobal"}
        className={"nav-global"}
        isVisible={isVisible}
        disableClickableOverlay
        closeDialog={_toggleVisibility}
      >
        <List toggleVisibility={_toggleVisibility} />
        <NavButton
          addClass="close"
          onClick={_toggleVisibility}
          colour={"#343434"}
          tier={"outlined"}
        />
      </Dialog>
    </Fragment>
  );
};

export default GlobalNavigation;

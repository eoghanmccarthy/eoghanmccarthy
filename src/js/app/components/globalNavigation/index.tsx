import React, { Fragment, useState } from "react";

import { Button, Dialog, Icons } from "eoghandotio-ui";
import List from "components/globalNavigation/list";

const GlobalNavigation: React.FunctionComponent<{}> = () => {
  const [isVisible, toggleVisibility] = useState(false);

  const _toggleVisibility = () => {
    toggleVisibility(!isVisible);
  };

  return (
    <Fragment>
      <Button
        className={"btn__nav-global"}
        onClick={_toggleVisibility}
        colour={"#666666"}
        tier={"contained"}
        shape={"circle"}
        size={"small"}
      >
        <Icons.Menu />
      </Button>
      <Dialog
        id={"navGlobal"}
        className={"nav-global"}
        isVisible={isVisible}
        disableClickableOverlay
        closeDialog={_toggleVisibility}
      >
        <List toggleVisibility={_toggleVisibility} />
        <Button
          className={"btn__nav-global close"}
          onClick={_toggleVisibility}
          colour={"#343434"}
          tier={"outlined"}
          shape={"circle"}
          size={"small"}
        >
          <Icons.Close />
        </Button>
      </Dialog>
    </Fragment>
  );
};

export default GlobalNavigation;

import React, { Fragment, useState } from "react";
import { withRouter } from "react-router";

import { Button, Dialog } from "@eoghanmccarthy/ui";

const GlobalNavigation = ({ history }) => {
  const [showDialog, toggleDialog] = useState(false);
  const open = () => toggleDialog(true);
  const close = () => toggleDialog(false);
  const toggle = () => toggleDialog(vis => !vis);

  return (
    <Fragment>
      <Button
        className={"btn__nav-global"}
        onClick={toggle}
        colour={"#666666"}
        tier={"contained"}
        shape={"circle"}
        size={"small"}
      />
      <Dialog
        id={"navGlobal"}
        className={"nav-global"}
        isVisible={showDialog}
        disableClickableOverlay
        closeDialog={toggle}
      >
        <List toggleVisibility={toggle} />
        <Button
          className={"btn__nav-global close"}
          onClick={toggle}
          colour={"#343434"}
          tier={"outlined"}
          shape={"circle"}
          size={"small"}
        />
      </Dialog>
    </Fragment>
  );
};

export default withRouter(GlobalNavigation);

const List = ({ toggleVisibility = null }) => {
  const _route = (route: string) => {
    history.push(route);
    toggleVisibility();
  };

  return (
    <nav>
      {data.map((item: { route: string, label: string }, index: number) => (
        <a key={index} onClick={() => _route(item.route)}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

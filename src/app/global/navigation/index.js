import React, { Fragment, useState } from "react";
import { withRouter } from "react-router";

import { Button, Dialog } from "@eoghanmccarthy/ui";

const GlobalNavigation = () => {
  const [showDialog, toggleDialog] = useState(false);
  const open = () => toggleDialog(true);
  const close = () => toggleDialog(false);
  const toggle = () => toggleDialog(vis => !vis);

  return (
    <Fragment>
      <Button size={"lg"} shape={"circle"} onClick={toggle}>
        <span />
        <span />
      </Button>
      <Dialog
        id={"navGlobal"}
        className={"nav-global"}
        isVisible={showDialog}
        closeDialog={toggle}
      >
        <ListWithRouter toggleVisibility={toggle} />
        <Button
          size={"sm"}
          shape={"circle"}
          className={"btn__nav-global close"}
          onClick={toggle}
        />
      </Dialog>
    </Fragment>
  );
};

export default GlobalNavigation;

const data = [
  {
    route: "/japan",
    label: "japan"
  }
];

const List = ({ history, toggleVisibility = null }) => {
  const handleOnClick = route => {
    history.push(route);
    toggleVisibility();
  };

  return (
    <nav>
      {data.map((item, index) => (
        <a key={index} onClick={() => handleOnClick(item.route)}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

const ListWithRouter = withRouter(List);

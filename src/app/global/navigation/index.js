import React, { Fragment, useState } from "react";
import { withRouter } from "react-router";

import "./index.scss";

import { Button, Dialog } from "@eoghanmccarthy/ui";

const GlobalNavigation = () => {
  const [showDialog, toggleDialog] = useState(false);
  const open = () => toggleDialog(true);
  const close = () => toggleDialog(false);
  const toggle = () => toggleDialog(vis => !vis);

  return (
    <Fragment>
      <Button
        size={"lg"}
        shape={"circle"}
        className={"btn-nav-global"}
        onClick={open}
      >
        <span />
        <span />
      </Button>
      <Dialog id={"nav-global"} isVisible={showDialog} closeDialog={close}>
        <ListWithRouter closeDialog={close} />
        <Button
          size={"lg"}
          shape={"circle"}
          className={"btn-nav-global"}
          onClick={close}
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

const List = ({ history, closeDialog }) => {
  const handleOnClick = route => {
    history.push(route);
    closeDialog();
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

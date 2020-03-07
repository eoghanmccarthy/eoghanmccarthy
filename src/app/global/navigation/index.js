import React, { Fragment, useState } from "react";
import { withRouter } from "react-router";

import "./index.scss";

import { Button, Dialog } from "@eoghanmccarthy/ui";

const GlobalNavigation = ({ history }) => {
  const [showDialog, toggleDialog] = useState(false);
  const open = () => toggleDialog(true);
  const close = () => toggleDialog(false);

  const [next, setNext] = useState([]);

  const handleOnClick = async route => {
    !next.length && (await setNext([route]));
  };

  return (
    <Fragment>
      <Button
        size={"lg"}
        shape={"circle"}
        className={"global-nav open"}
        onClick={open}
      >
        <span />
        <span />
      </Button>
      <Dialog
        id={"global-nav"}
        isVisible={showDialog}
        closeDialog={close}
        onDestroy={() => {
          if (next.length) {
            let r = next.shift();
            history.push(r);
          }
        }}
      >
        <List onClick={r => handleOnClick(r).then(() => close())} />
        <Button
          size={"lg"}
          shape={"circle"}
          className={"global-nav close"}
          onClick={close}
        >
          <span />
          <span />
        </Button>
      </Dialog>
    </Fragment>
  );
};

export default withRouter(GlobalNavigation);

const data = [
  {
    route: "/japan",
    label: "japan"
  }
];

const List = ({ onClick }) => {
  return (
    <nav>
      {data.map((item, index) => (
        <a key={index} tabIndex={"0"} onClick={() => onClick(item.route)}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

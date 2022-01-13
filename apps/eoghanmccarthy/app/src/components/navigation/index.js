import React, { Fragment, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Button, Dialog } from "@eoghanmccarthy/ui";

import "./styles.scss";

import * as IconButtons from "components/iconButtons";

const data = [
  {
    route: "/posts",
    label: "posts",
  },
];

const GlobalNavigation = ({ history }) => {
  const [showDialog, toggleDialog] = useState(false);
  const open = () => toggleDialog(true);
  const close = () => toggleDialog(false);

  const [next, setNext] = useState([]);

  const handleOnClick = async (route) => {
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
        <nav>
          {data.map((item) => {
            const { label, route } = item;
            return (
              <Link
                key={route}
                tabIndex={"0"}
                to={route}
                onClick={(r) => handleOnClick(r).then(() => close())}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <IconButtons.Close className={"global-nav"} onClick={close} />
      </Dialog>
    </Fragment>
  );
};

export default withRouter(GlobalNavigation);

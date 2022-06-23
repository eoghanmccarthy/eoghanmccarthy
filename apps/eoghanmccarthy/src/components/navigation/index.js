import React, { Fragment, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Button, Dialog, useDialog } from "@eoghanmccarthy/ui";

import "./styles.scss";

import * as IconButtons from "components/iconButtons";

const data = [
  {
    route: "/posts",
    label: "posts",
  },
];

const GlobalNavigation = ({ history }) => {
  const navDialog = useDialog();

  const [next, setNext] = useState([]);

  const handleOnClick = async (route) => {
    !next.length && (await setNext([route]));
  };

  return (
    <Fragment>
      <Button
        size={48}
        shape={"circle"}
        className={"global-nav open"}
        onClick={navDialog.open}
      >
        <span />
        <span />
      </Button>
      <Dialog
        id={"global-nav"}
        isOpen={navDialog.isOpen}
        closeDialog={navDialog.close}
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
                onClick={(r) => handleOnClick(r).then(() => navDialog.close())}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <IconButtons.Close className={"global-nav"} onClick={navDialog.close} />
      </Dialog>
    </Fragment>
  );
};

export default withRouter(GlobalNavigation);

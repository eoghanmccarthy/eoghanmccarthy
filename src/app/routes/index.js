import React from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import cx from "classnames";

import Header from "global/header";
import Content from "./content";

const Routes = ({ location }) => (
  <div className={cx("me", { index: location.pathname === "/" })}>
    <Header />
    <Switch>
      <Route exact path="/" render={() => null} />
      <Route path="/" render={() => <Content />} />
      <Route render={() => null} />
    </Switch>
  </div>
);

export default withRouter(Routes);

import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "containers/header";
import Footer from "containers/footer";
import Japan from "pages/japan";

export default () => (
  <Fragment>
    <Header />
    <Switch>
      <Route path="/japan" render={() => <Japan />} />
    </Switch>
    <Footer />
  </Fragment>
);

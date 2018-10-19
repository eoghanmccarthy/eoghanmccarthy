import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "containers/header";
import Footer from "containers/footer";
import Lightbox from "containers/lightbox";
import Japan from "pages/japan";

export default () => (
  <Fragment>
    <Header />
    <Lightbox />
    <Switch>
      <Route path="/japan" render={() => <Japan />} />
    </Switch>
    <Footer />
  </Fragment>
);

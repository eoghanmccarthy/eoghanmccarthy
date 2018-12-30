import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/header";
import Footer from "components/footer";
import Lightbox from "components/lightbox";
import Japan from "pages/japan";

export default () => (
  <div className="me">
    <Header />
    <Lightbox />
    <Switch>
      <Route path="/japan" render={() => <Japan />} />
    </Switch>
    <Footer />
  </div>
);

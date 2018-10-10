import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/home";
import Japan from "pages/japan";

export default () => (
  <div className="me">
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/japan" render={() => <Japan />} />
      <Route render={() => <Home />} />
    </Switch>
  </div>
);

import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "routes/main";

import Home from "pages/home";

export default () => (
  <div className="me">
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/" render={() => <Main />} />
      <Route render={() => <Home />} />
    </Switch>
  </div>
);

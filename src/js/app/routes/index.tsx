import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/home";
import Main from "routes/main";

export default () => (
  <Switch>
    <Route exact path="/" render={() => <Home />} />
    <Route path="/" render={() => <Main />} />
    <Route render={() => <Home />} />
  </Switch>
);

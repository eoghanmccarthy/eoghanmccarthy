import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/home";
import Content from "./main";

export default () => (
  <Switch>
    <Route exact path="/" render={() => <Home />} />
    <Route path="/" render={() => <Content />} />
    <Route render={() => <Home />} />
  </Switch>
);

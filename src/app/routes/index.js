import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "global/header";
import Home from "pages/home";
import Content from "./content";

export default () => (
  <div className="me">
    <Header />
    <Switch>
      <Route exact path="/" render={() => null} />
      <Route path="/" render={() => <Content />} />
      <Route render={() => <Home />} />
    </Switch>
  </div>
);

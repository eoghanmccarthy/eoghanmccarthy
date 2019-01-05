import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/home";
const Main = lazy(() => import("routes/main"));

export default () => (
  <Suspense fallback={null}>
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/" render={() => <Main />} />
      <Route render={() => <Home />} />
    </Switch>
  </Suspense>
);

import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("pages/home"));
import Main from "routes/main";

export default () => (
  <Suspense fallback={null}>
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/" render={() => <Main />} />
      <Route render={() => <Home />} />
    </Switch>
  </Suspense>
);

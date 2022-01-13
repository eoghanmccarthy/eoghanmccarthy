import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("pages/home"));

import styles from "./styles.css";

import Posts from "./posts";

const Routes = () => (
  <Switch>
    <Suspense fallback={null}>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/posts" render={() => <Posts />} />
      <Route render={() => null} />
    </Suspense>
  </Switch>
);

export default Routes;

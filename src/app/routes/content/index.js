import React, { Fragment, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "global/footer";

const Japan = lazy(() => import("pages/japan"));
const Other = lazy(() => import("pages/other"));

export default () => (
  <Fragment>
    <main className={"me__content"}>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/japan" render={() => <Japan />} />
          <Route path="/other" render={() => <Other />} />
        </Switch>
      </Suspense>
    </main>
    <Footer />
  </Fragment>
);

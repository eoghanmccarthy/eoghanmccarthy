import React, { Fragment, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "global/footer";

const Japan = lazy(() => import("pages/japan"));

export default () => (
  <Fragment>
    <main className={"me__content"}>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/japan" render={() => <Japan />} />
        </Switch>
      </Suspense>
    </main>
    <Footer />
  </Fragment>
);

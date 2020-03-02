import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "global/footer";
import Lightbox from "features/lightbox";

const Japan = lazy(() => import("pages/japan"));

export default () => (
  <Lightbox>
    <Suspense fallback={null}>
      <Switch>
        <Route path="/japan" render={() => <Japan />} />
      </Switch>
    </Suspense>
    <Footer />
  </Lightbox>
);

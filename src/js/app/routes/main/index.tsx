import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/header";
import Footer from "containers/footer";
import Lightbox from "components/lightbox";
const Japan = lazy(() => import("pages/japan"));

export default () => (
  <div className="me">
    <Header />
    <Lightbox>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/japan" render={() => <Japan />} />
        </Switch>
      </Suspense>
    </Lightbox>
    <Footer />
  </div>
);

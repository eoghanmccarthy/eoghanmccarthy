import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useDialogsContext } from "@eoghanmccarthy/ui";

const Home = lazy(() => import("pages/index"));

import Posts from "pages/posts";

const Routes = () => {
  const dialog = useDialogsContext();
  const location = useLocation();

  useEffect(() => {
    if (location) {
      dialog.clear();
    }
  }, [location]);

  return (
    <Switch>
      <Suspense fallback={null}>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/posts" render={() => <Posts />} />
        <Route render={() => null} />
      </Suspense>
    </Switch>
  );
};

export default Routes;

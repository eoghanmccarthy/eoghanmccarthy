import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useDialogsContext } from "@eoghanmccarthy/ui";

import Home from "./pages";

const App = () => {
  const dialogCtx = useDialogsContext();
  const location = useLocation();

  useEffect(() => {
    if (location) {
      dialogCtx.clear();
    }
  }, [location]);

  return (
    <div className="me">
      <header className="me__header" />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route render={() => <Home />} />
      </Switch>
      <footer className="me__footer" />
    </div>
  );
};

export default App;

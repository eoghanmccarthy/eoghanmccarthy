import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages";

const App = () => (
  <div className="me">
    <header className="me__header" />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route render={() => <Home />} />
    </Switch>
    <footer className="me__footer" />
  </div>
);

export default App;

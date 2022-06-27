import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { DialogsProvider, ErrorBoundary } from "@eoghanmccarthy/ui";

import "./styles.css";

import App from "./App";

const history = createHistory();

const MOUNT_NODE = document.getElementById("root");

render(
  <Router history={history}>
    <ErrorBoundary>
      <DialogsProvider>
        <App />
      </DialogsProvider>
    </ErrorBoundary>
  </Router>,
  MOUNT_NODE
);

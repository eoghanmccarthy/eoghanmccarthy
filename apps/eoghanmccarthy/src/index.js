import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorBoundary } from "@eoghanmccarthy/ui";

import App from "./routes";

import "./styles.scss";

const MOUNT_NODE = document.getElementById("root");

const queryClient = new QueryClient();

render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </QueryClientProvider>,
  MOUNT_NODE
);

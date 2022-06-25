import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { DialogsProvider, ErrorBoundary } from "@eoghanmccarthy/ui";

import App from "./App";

import "./styles.css";

const MOUNT_NODE = document.getElementById("root");

const queryClient = new QueryClient();

render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ErrorBoundary>
        <DialogsProvider>
          <App />
        </DialogsProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </QueryClientProvider>,
  MOUNT_NODE
);

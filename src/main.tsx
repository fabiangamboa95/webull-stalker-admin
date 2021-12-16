import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppConfigProvider from "./utils/AppConfigProvider";
import Pages from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppConfigProvider>
        <Pages />
      </AppConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

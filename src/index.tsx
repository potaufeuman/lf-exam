import * as React from "react";
import { render } from "react-dom";
import App from "./pages/app";

const Main = (
  <>
    <App />
  </>
);

render(Main, document.getElementById("app"));

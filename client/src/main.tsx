import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

console.log(process.env.NODE_ENV);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

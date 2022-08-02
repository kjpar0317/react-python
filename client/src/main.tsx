import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

console.log(process.env.NODE_ENV);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducerFunc from "./Redux/reducers";
import App from "./App";

const store = createStore(reducerFunc);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import MainReducer from "./reducers";
import App from "./App";

const store = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ?window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)(createStore)(MainReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

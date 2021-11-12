import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";
import "./index.css";

let store = createStore(allReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


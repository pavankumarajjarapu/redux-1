import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
let initialStore = {
  actors: [],
  cricketers: [],
  politicians: [],
};
let reducer = (latestStore = initialStore, dispacthedObj) => {
  console.log("inside reducer function")
  console.log(dispacthedObj)
  if (dispacthedObj.type == "addActor"){
    return{...latestStore,actors:latestStore.actors.concat(dispacthedObj.data),}
  } else if( dispacthedObj.type=="addCricketers"){
    return{...latestStore,cricketers:latestStore.cricketers.concat(dispacthedObj.data)}
  } else if  ( dispacthedObj.type == "addPoliticians"){
    return{...latestStore,politicians:latestStore.politicians.concat(dispacthedObj.data)}
  }

  
  return latestStore;
};

let store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

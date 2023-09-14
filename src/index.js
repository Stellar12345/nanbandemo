import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

let scrollClick = document.querySelector(".scroll-to-top");
scrollClick.addEventListener('click', function(e){
  console.log("Lets Check")
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' })
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
<App />
</BrowserRouter>
, rootElement

);
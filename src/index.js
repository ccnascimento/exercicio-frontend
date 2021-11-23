import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/home";

import "./style.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

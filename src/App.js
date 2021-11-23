import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/home";
import Aside from "./components/Aside";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <main className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Aside />
      </main>
    </Provider>
  );
}

export default App;

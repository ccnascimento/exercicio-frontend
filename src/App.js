import React from "react";
import NavBar from "./components/NavBar";
import Home from "./Home";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <NavBar />
      <main className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        <Home />
        <Aside />
      </main>
    </>
  );
}

export default App;

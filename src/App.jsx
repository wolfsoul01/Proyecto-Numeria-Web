import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Calcular from "./pages/Calcular";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calcular' element={<Calcular />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

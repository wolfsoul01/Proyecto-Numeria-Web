import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Calcular from "./pages/Calcular";
import {Data} from "./context/Contexto";

const App = () => {
  return (
    <>
      <Data>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calcular' element={<Calcular />} />
          </Routes>
        </BrowserRouter>
      </Data>
    </>
  );
};

export default App;

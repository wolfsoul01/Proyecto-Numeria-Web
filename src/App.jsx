import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Calcular from "./pages/Calcular";
import {Data} from "./context/Contexto";
import Documentation from "./pages/Documentation";

const App = () => {
  return (
    <>
      <Data>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calcular' element={<Calcular />} />
            <Route path='/documentation' element={<Documentation />} />
          </Routes>
        </BrowserRouter>
      </Data>
    </>
  );
};

export default App;

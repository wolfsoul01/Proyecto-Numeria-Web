import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Polynomial from "./pages/Polynomial";
import Placeholder1 from "./pages/Placeholder1";
import Placeholder2 from "./pages/Placeholder2";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/polynomial' element={<Polynomial />} />
          <Route path='/Placeholder1' element={<Placeholder1 />} />
          <Route path='/Placeholder2' element={<Placeholder2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

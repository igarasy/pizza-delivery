import React from 'react';
import FirstStep from './pages/firstStep';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second-step" element={<FirstStep />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

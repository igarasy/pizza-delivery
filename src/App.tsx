import React from 'react';
import Header from './components/header';
import FirstStep from './pages/firstStep';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SecondStep from './pages/secondStep';

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

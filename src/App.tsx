import React from 'react';
import FirstStep from './pages/firstStep';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second-step" element={<FirstStep />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

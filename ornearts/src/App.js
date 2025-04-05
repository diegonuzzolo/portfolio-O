import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home'
import Galleria from './components/Gallery';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galleria" element={<Galleria />} />
    </Routes>
    

  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FullMenuPage from './pages/FullMenuPage';
import SpatialInfoPage from './pages/SpatialInfoPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/menu" element={<FullMenuPage />} />
      <Route path="/spatial-info" element={<SpatialInfoPage />} />
    </Routes>
  );
}

export default App;

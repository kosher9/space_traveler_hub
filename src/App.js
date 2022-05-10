import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/misssions/Missions';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;

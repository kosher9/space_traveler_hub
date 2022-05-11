import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MissionsList from './components/misssions/MissionsList';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/missions" element={<MissionsList />} />
      </Routes>
    </>
  );
}

export default App;

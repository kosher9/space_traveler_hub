import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MissionsList from './components/misssions/MissionsList';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Rockets from './components/rocket/Rockets';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<MissionsList />} />
        <Route path="/myProfile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

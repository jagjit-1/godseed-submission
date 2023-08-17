import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import BuyerDashboard from './Components/buttons'; // Import the BlueBoxWithButtons component
import SellerDashboard from './pages/sellerDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/seller" element={<SellerDashboard />} />
        <Route path="/buyer" element={<BuyerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

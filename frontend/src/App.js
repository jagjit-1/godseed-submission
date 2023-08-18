import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import BuyerDashboard from './Components/buttons'; // Import the BlueBoxWithButtons component
import SellerDashboard from './pages/sellerDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ethers } from 'ethers'
import contractABI from './abi.json'

const contractAddress = '0x33C35Df6B92FC699e0d0892363Fb1fBB93ca5FEc'
const loadData = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  const greeting = await contract.transferOwnership();
  alert(greeting);

}
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


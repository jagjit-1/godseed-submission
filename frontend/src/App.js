import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import BuyerDashboard from './Components/buttons'; // Import the BlueBoxWithButtons component
import SellerDashboard from './pages/sellerDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import contractABI from './abi.json'
import Web3Abstraction from './utils/web3Utils';

const contractAddress = '0x33C35Df6B92FC699e0d0892363Fb1fBB93ca5FEc'


function App() {
  const [web3, setWeb3] = useState(null);
  const connectWeb3 = async () => {
    const web3 = new Web3Abstraction(contractAddress, contractABI);
    await web3.connectWallet();
    await web3.connectContract();
    await web3.queryEvents();
    setWeb3(web3);
  }
  console.log(web3)
  return (
    <BrowserRouter>
      <Header web3={web3} connectWeb3={connectWeb3} />
      <Routes>
        <Route index path="/seller" element={<SellerDashboard web3={web3} />} />
        <Route path="/buyer" element={<BuyerDashboard web3={web3} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


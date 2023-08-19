import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import BuyerDashboard from './Components/buttons'; // Import the BlueBoxWithButtons component
import SellerDashboard from './pages/sellerDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ethers } from 'ethers'
import contractABI from './abi.json'

const contractAddress = '0x33C35Df6B92FC699e0d0892363Fb1fBB93ca5FEc'


function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState('');
  const [contract, setContract] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const initializeProvider = async () => {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
      }
    };
    initializeProvider();

  }, []);
  useEffect(() => {
    const connectContract = async () => {
      if (provider) {
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const signerAddress = await signer.getAddress();
        const address = await signer.getAddress();
        const bal = await contract.balanceOf(signerAddress);
        setContract(contract);
        setSigner(signer);
        setAddress(address);
      }
    };

    const getPreviousTransactions = async () => {
      if (provider) {
        const contract = new ethers.Contract(contractAddress, contractABI, provider);
        const filter = contract.filters.Transfer;
        const other = contract.filters.Transfer(null, address)
        const events = await contract.queryFilter(filter, -100);
        const otherEvents = await contract.queryFilter(other, -100)
        console.log(events, otherEvents, "events")
      }

    }

    connectContract();
    getPreviousTransactions();

  }, [provider]);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/seller" element={<SellerDashboard />} />
        <Route path="/buyer" element={<BuyerDashboard contract={contract} address={address} signer={signer} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


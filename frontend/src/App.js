import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
// import BlueBoxWithButtons from './Components/buttons/BlueBoxWithButtons'; // Import the BlueBoxWithButtons component
import BlueBoxWithDropdown from './Components/buttons'; // Import the BlueBoxWithDropdown component
import BlueBoxWithButtons from './Components/buttons'; // Import the BlueBoxWithButtons component
import SellerDashboard from './pages/sellerDashboard'


function App() {
    return (
        <div>
            <Header />
            <BlueBoxWithButtons />
            {/* <BlueBoxWithDropdown /> */}
        </div>
    );


function App() {
  return (
    <>
    <Header />
    <div className="body-content">
        <SellerDashboard />
    </div>
    
    </>
  );
}
}

export default App;

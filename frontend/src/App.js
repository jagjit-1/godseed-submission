import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
// import BlueBoxWithButtons from './Components/buttons/BlueBoxWithButtons'; // Import the BlueBoxWithButtons component
import BlueBoxWithDropdown from './Components/buttons'; // Import the BlueBoxWithDropdown component
import BlueBoxWithButtons from './Components/buttons'; // Import the BlueBoxWithButtons component


function App() {
    return (
        <div>
            <Header />
            <BlueBoxWithButtons />
            {/* <BlueBoxWithDropdown /> */}
        </div>
    );
}

export default App;

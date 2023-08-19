// import React from 'react';
// import { Box, Button, MenuItem, Select } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { Typography } from '@mui/material';
// import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';



// const BlueBoxWithButtons = () => {
//     return (
//         <Box
//             bgcolor="white"
//             width="100%"
//             minHeight="100vh"
//             // display="flex"
//             alignItems="center"
//             justifyContent="center"
//             flexDirection="column"
//             display="grid"
//             gridTemplateColumns="repeat(2, 0.5fr)"
//             gap="0.5rem"
//         >
//             <Button variant="outlined" color="primary" style={{ marginTop: '20rem', marginBottom: '20rem', color: 'blue' }}>
//                 Generate Referral Link
//             </Button>
//             <Link to="https://www.flipkart.com" target="_blank">
//                  <Button variant="outlined" color="primary" style={{ marginTop: '20rem', marginBottom: '20rem', color: 'blue' }}>
//                  Shop and earn tokens
//                 </Button>
//             </Link>
//             <Button variant="outlined" color="primary" style={{ marginTop: '-60rem', marginBottom: '-20rem', color: 'blue' }}>
//                 Earn3
//             </Button>
//             <Button variant="outlined" color="primary" style={{ marginTop: '-60rem', marginBottom: '-20rem', color: 'blue' }}>
//                 Earn4
//             </Button>
//         </Box>
//     );
// };

// const BlueBoxWithDropdown = () => {
//     const [selectedCoupon, setSelectedCoupon] = useState(null);
//     const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

//     const coupons = [
//       { id: 1, title: 'Coupon A', price: 10, description: 'Description of Coupon A' },
//       { id: 2, title: 'Coupon B', price: 20, description: 'Description of Coupon B' },
//       { id: 3, title: 'Coupon C', price: 15, description: 'Description of Coupon C' },
//       // Add more coupons as needed
//     ];

//     const handleCouponSelect = (event) => {
//       const selectedId = event.target.value;
//       const selected = coupons.find((coupon) => coupon.id === selectedId);
//       setSelectedCoupon(selected);
//     };
//     const handleRedeemButtonClick = () => {
//         setIsConfirmationOpen(true);
//       };

//       const handleConfirmRedeem = () => {
//         // Perform redeem logic here
//         setIsConfirmationOpen(false);
//         setSelectedCoupon(null); // Clear selected coupon
//       };

//       const handleCloseConfirmation = () => {
//         setIsConfirmationOpen(false);
//       };


//       return (
//         <Box
//           bgcolor="#2874f0"
//           width="100%"
//           minHeight="100vh"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           flexDirection="column"
//         >
//           <Select
//             variant="outlined"
//             color="primary"
//             value="select"
//             onChange={handleCouponSelect}
//             style={{ minWidth: 150, marginBottom: '1rem', color: 'white' }}
//           >
//             {/* ... Coupon options ... */}
//           </Select>

//           {selectedCoupon && (
//             <Box mt={2} p={2} bgcolor="white" borderRadius={4} maxWidth={400} width="100%">
//               <Typography variant="h6">Selected Coupon:</Typography>
//               {/* ... Coupon details ... */}
//               <Button variant="contained" color="primary" onClick={handleRedeemButtonClick}>Redeem Coupon</Button>
//             </Box>
//           )}

//           <Dialog
//             open={isConfirmationOpen}
//             onClose={handleCloseConfirmation}
//           >
//             <DialogTitle>Confirm Redemption</DialogTitle>
//             <DialogContent>
//               <DialogContentText>
//                 Are you sure you want to redeem the selected coupon?
//               </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleCloseConfirmation} color="primary">
//                 Cancel
//               </Button>
//               <Button onClick={handleConfirmRedeem} color="primary">
//                 Redeem
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </Box>
//       );
//     };

//     //   export default BlueBoxWithDropdown;


// //   export default BlueBoxWithDropdown;

// const YourPage = () => {
//     return (
//         <div style={{ display: 'flex' }}>
//             <BlueBoxWithButtons />
//             <BlueBoxWithDropdown />
//         </div>
//     );
// };

// export default YourPage;

import React, { useEffect, useState } from 'react';
import { Box, Button, MenuItem, Select, Typography, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ethers } from 'ethers';

const BlueBoxWithButtons = ({ contract, signer, address }) => {

  const [oldTxn, setOldTxn] = useState(null);
  useEffect(() => {


  }, [address])

  const getPreviousTransactions = async () => {
    if (contract) {
      const filter = contract.filters.Transfer(address);
      const other = contract.filters.Transfer(null, address)
      const events = await contract.queryFilter(filter, -100);
      const otherEvents = await contract.queryFilter(other, -100)
      console.log(events, otherEvents, "events")
      setOldTxn(events);
    }
  }
  return (
    <Box
      bgcolor="white"
      width="100%"
      minHeight="100vh"
      display="grid"
      gridTemplateColumns="repeat(2, 0.4fr)"
      gap="0.5rem"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button variant="contained" color="primary">
            Generate Referral Link
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Link to="https://www.flipkart.com" target="_blank" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Shop and earn tokens
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary">
            Earn3
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary">
            Earn4
          </Button>
        </Grid>
      </Grid>

    </Box>
  );
};

const BlueBoxWithDropdown = ({ web3 }) => {
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      const bal = await web3.getBalance();
      setBalance(bal);
    }
    if (web3) {
      getBalance()
    }


  }, [web3])
  const coupons = [
    { id: 1, title: 'Coupon A', price: 10, description: 'Description of Coupon A', tokenCost: "20", sellerAddress: "0x4d326dA657338De6786736702Bc09612301fc3a7" },
    { id: 2, title: 'Coupon B', price: 20, description: 'Description of Coupon B', tokenCost: "50" },
    { id: 3, title: 'Coupon C', price: 15, description: 'Description of Coupon C', tokenCost: "30" },
    // Add more coupons as needed
  ];

  const handleCouponSelect = (event) => {
    const selectedId = event.target.value;
    const selected = coupons.find((coupon) => coupon.id === selectedId);
    setSelectedCoupon(selected);
  };


  const handleRedeemButtonClick = () => {

    setIsConfirmationOpen(true);
  };

  const handleConfirmRedeem = async () => {
    // Perform redeem logic here
    await web3.initiateTransaction(selectedCoupon.sellerAddress, selectedCoupon.tokenCost);
    await web3.lastTransaction.wait();
    console.log("abb hua transactions complete")
    const bal = await web3.getBalance();
    setBalance(bal);
    setIsConfirmationOpen(false);
    setSelectedCoupon(null); // Clear selected coupon
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <Box
      bgcolor="#2874f0"
      width="100%"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      padding="2rem"
    >
      {
        balance && (
          <Typography variant='h5' style={{ color: "white", marginBottom: "20px" }}>FT Balance: {balance}</Typography>
        )
      }
      <Select
        variant="outlined"
        color="primary"
        value="select"
        onChange={handleCouponSelect}
        style={{ minWidth: 150, marginBottom: '1rem', color: 'white' }}
      >
        <MenuItem value="select">Select Coupon</MenuItem>
        {coupons.map((coupon) => (
          <MenuItem key={coupon.id} value={coupon.id}>
            {coupon.title} - {coupon.price} USD
          </MenuItem>
        ))}
      </Select>

      {selectedCoupon && (
        <Box mt={2} p={2} bgcolor="white" borderRadius={4} maxWidth={400} width="100%">
          <Typography variant="h6">Selected Coupon:</Typography>
          <Typography>{selectedCoupon.title}</Typography>
          <Typography>{selectedCoupon.description}</Typography>
          <Typography>Price: {selectedCoupon.price} USD</Typography>
          <Typography>Token Cost: {selectedCoupon.tokenCost} FT</Typography>
          <Button variant="contained" color="primary" onClick={handleRedeemButtonClick}>Redeem Coupon</Button>
        </Box>
      )}

      <Dialog
        open={isConfirmationOpen}
        onClose={handleCloseConfirmation}
      >
        <DialogTitle>Confirm Redemption</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to redeem the selected coupon?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmRedeem} color="primary">
            Redeem
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const YourPage = ({ web3 }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr", width: "100%", border: "1px solid black" }}>
      <BlueBoxWithButtons web3={web3} />
      <BlueBoxWithDropdown web3={web3} />
    </div>
  );
};

export default YourPage;

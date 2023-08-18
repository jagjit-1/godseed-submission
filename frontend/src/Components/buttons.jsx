import React from 'react';
import { Box, Button, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Typography } from '@mui/material';
import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';



const BlueBoxWithButtons = () => {
    return (
        <Box
            bgcolor="white"
            width="100%"
            minHeight="100vh"
            // display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            display="grid"
            gridTemplateColumns="repeat(2, 0.5fr)"
            gap="0.5rem"
        >
            <Button variant="outlined" color="primary" style={{ marginTop: '20rem', marginBottom: '20rem', color: 'blue' }}>
                Generate Referral Link
            </Button>
            <Link to="https://www.flipkart.com" target="_blank">
                 <Button variant="outlined" color="primary" style={{ marginTop: '20rem', marginBottom: '20rem', color: 'blue' }}>
                 Shop and earn tokens
                </Button>
            </Link>
            <Button variant="outlined" color="primary" style={{ marginTop: '-60rem', marginBottom: '-20rem', color: 'blue' }}>
                Earn3
            </Button>
            <Button variant="outlined" color="primary" style={{ marginTop: '-60rem', marginBottom: '-20rem', color: 'blue' }}>
                Earn4
            </Button>
        </Box>
    );
};

const BlueBoxWithDropdown = () => {
    const [selectedCoupon, setSelectedCoupon] = useState(null);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  
    const coupons = [
      { id: 1, title: 'Coupon A', price: 10, description: 'Description of Coupon A' },
      { id: 2, title: 'Coupon B', price: 20, description: 'Description of Coupon B' },
      { id: 3, title: 'Coupon C', price: 15, description: 'Description of Coupon C' },
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
    
      const handleConfirmRedeem = () => {
        // Perform redeem logic here
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
        >
          <Select
            variant="outlined"
            color="primary"
            value="select"
            onChange={handleCouponSelect}
            style={{ minWidth: 150, marginBottom: '1rem', color: 'white' }}
          >
            {/* ... Coupon options ... */}
          </Select>
          
          {selectedCoupon && (
            <Box mt={2} p={2} bgcolor="white" borderRadius={4} maxWidth={400} width="100%">
              <Typography variant="h6">Selected Coupon:</Typography>
              {/* ... Coupon details ... */}
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
      
    //   export default BlueBoxWithDropdown;
      
  
//   export default BlueBoxWithDropdown;

const YourPage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <BlueBoxWithButtons />
            <BlueBoxWithDropdown />
        </div>
    );
};

export default YourPage;

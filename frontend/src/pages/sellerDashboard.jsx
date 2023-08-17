import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import './sellerDash.css';

function SellerDashboard() {
  const walletBalance = 5000; // Example wallet balance
  const transactionHistory = [
    // Transaction history items
    // Format: { id: 1, description: '...', amount: ... }
  ];

  const renderTransactionHistory = () => {
    // Render transaction history items
    return transactionHistory.map((transaction) => (
      <Box key={transaction.id} display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Typography>{transaction.description}</Typography>
        <Typography>{transaction.amount} USD</Typography>
      </Box>
    ));
  };

  const renderCoupons = () => {
    // Replace with actual data
    const coupons = [
      { id: 1, title: 'Coupon 1', description: 'Description of Coupon 1' },
      { id: 2, title: 'Coupon 2', description: 'Description of Coupon 2' },
      { id: 3, title: 'Coupon 3', description: 'Description of Coupon 3' },
      { id: 4, title: 'Coupon 4', description: 'Description of Coupon 4' },
      { id: 5, title: 'Coupon 5', description: 'Description of Coupon 5' },
    ];

    return coupons.map((coupon) => (
      <Paper key={coupon.id} elevation={3} className="coupon-box">
        <Typography variant="h6">{coupon.title}</Typography>
        <Typography variant="body2">{coupon.description}</Typography>
        {/* Add any additional coupon details */}
      </Paper>
    ));
  };

  return (
    <div className="seller-dashboard">
      <div className="left-section">
        <Paper elevation={3} className="left-box">
          <Typography variant="h6">Wallet Balance: {walletBalance} USD</Typography>
          {/* Balance bar */}
          <div className="balance-bar" style={{ width: (walletBalance / 50000) * 100 + '%' }}></div>
          <Typography variant="body2">Last 10 Transactions:</Typography>
          <Box mt={2}>
            {renderTransactionHistory()}
          </Box>
          <Box mt={2} textAlign="center">
            <Button variant="contained">Load More</Button>
          </Box>
        </Paper>
      </div>
      <div className="right-section">
        <Box>
          <Typography variant="h5">Coupons Being Offered</Typography>
          <Box mt={2} display="flex" justifyContent="space-between">
            {renderCoupons()}
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default SellerDashboard;

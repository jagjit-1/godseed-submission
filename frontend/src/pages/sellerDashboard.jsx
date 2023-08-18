import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import './sellerDash.css';

function SellerDashboard() {
  const walletBalance = 5000; // Example wallet balance
  const transactionHistory = [
    { id: 1, description: 'coupon sold', amount: +100 },
    { id: 2, description: 'paid for loyalty', amount: -20 },
    { id: 3, description: 'Refund', amount: +100 },
    { id: 4, description: 'xyz', amount: 75 },
    { id: 5, description: 'zzzz', amount: -150 },
    { id: 6, description: 'Recieved', amount: 200 },
    { id: 7, description: 'Flipcoin', amount: -50 },
    // ... more transactions
  ];

  

  const renderTransactionHistory = () => {
    // Render last 5 transaction history items
    const last5Transactions = transactionHistory.slice(-5); 
    return last5Transactions.map((transaction) => (
      <Paper key={transaction.id} elevation={3} className="transaction-box">
        <Typography>{transaction.description}</Typography>
        <Typography>{transaction.amount} USD</Typography>
      </Paper>
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
          <Typography variant="body2">Last 5 Transactions:</Typography>
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

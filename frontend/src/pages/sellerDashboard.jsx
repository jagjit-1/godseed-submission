// import React from 'react';
// import { Box, Paper, Typography, Button } from '@mui/material';
// import './sellerDash.css';

// function SellerDashboard() {
//   const walletBalance = 5000; // Example wallet balance
//   const transactionHistory = [
//     { id: 1, description: 'coupon sold', amount: +100 },
//     { id: 2, description: 'paid for loyalty', amount: -20 },
//     { id: 3, description: 'Refund', amount: +100 },
//     { id: 4, description: 'xyz', amount: 75 },
//     { id: 5, description: 'zzzz', amount: -150 },
//     { id: 6, description: 'Recieved', amount: 200 },
//     { id: 7, description: 'Flipcoin', amount: -50 },
//     // ... more transactions
//   ];



//   const renderTransactionHistory = () => {
//     // Render last 5 transaction history items
//     const last5Transactions = transactionHistory.slice(-5); 
//     return last5Transactions.map((transaction) => (
//       <Paper key={transaction.id} elevation={3} className="transaction-box">
//         <Typography>{transaction.description}</Typography>
//         <Typography>{transaction.amount} USD</Typography>
//       </Paper>
//     ));
//   };

//   const renderCoupons = () => {
//     // Replace with actual data
//     const coupons = [
//       { id: 1, title: 'Coupon 1', description: 'Description of Coupon 1' },
//       { id: 2, title: 'Coupon 2', description: 'Description of Coupon 2' },
//       { id: 3, title: 'Coupon 3', description: 'Description of Coupon 3' },
//       { id: 4, title: 'Coupon 4', description: 'Description of Coupon 4' },
//       { id: 5, title: 'Coupon 5', description: 'Description of Coupon 5' },
//     ];

//     return coupons.map((coupon) => (
//       <Paper key={coupon.id} elevation={3} className="coupon-box">
//         <Typography variant="h6">{coupon.title}</Typography>
//         <Typography variant="body2">{coupon.description}</Typography>
//         {/* Add any additional coupon details */}
//       </Paper>
//     ));
//   };

//   return (
//     <div className="seller-dashboard">
//       <div className="left-section">
//         <Paper elevation={3} className="left-box">
//           <Typography variant="h6">Wallet Balance: {walletBalance} USD</Typography>
//           {/* Balance bar */}
//           <div className="balance-bar" style={{ width: (walletBalance / 50000) * 100 + '%' }}></div>
//           <Typography variant="body2">Last 5 Transactions:</Typography>
//           <Box mt={2}>
//             {renderTransactionHistory()}
//           </Box>
//           <Box mt={2} textAlign="center">
//             <Button variant="contained">Load More</Button>
//           </Box>
//         </Paper>
//       </div>
//       <div className="right-section">
//         <Box>
//           <Typography variant="h5">Coupons Being Offered</Typography>
//           <Box mt={2} display="flex" justifyContent="space-between">
//             {renderCoupons()}
//           </Box>
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default SellerDashboard;






import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Button, CircularProgress, Backdrop, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import './sellerDash.css';

function SellerDashboard({ web3 }) {
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [transactionsType, setTransactionsType] = useState("Credit");
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true);
        const bal = await web3.getBalance();
        const newTransactions = await web3.queryEvents("TRANSFER", transactionsType);
        setBalance(bal);
        setTransactions(newTransactions);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }


    }
    if (web3) {
      getDetails()
    }


  }, [web3, transactionsType])


  const topCustomers = [
    { id: 1, name: 'Sarijan', spending: 500, shoppingFrequency: 10, customerAddress: "0xe038C8729ca3d23938fcc666300B990E2865D69e" },
    { id: 2, name: 'Prashi', spending: 300, shoppingFrequency: 5, customerAddress: "0x4d326dA657338De6786736702Bc09612301fc3a7" },
    { id: 3, name: 'Jagjit', spending: 200, shoppingFrequency: 8, customerAddress: "0xe76c660B4d44Ba18Cc86D2AB8bcC21F4F2d9e44f" },
    // ... more customers
  ];
  const getDetails = async () => {
    const bal = await web3.getBalance();
    const newTransactions = await web3.queryEvents("TRANSFER", transactionsType);
    setBalance(bal);
    setTransactions(newTransactions);
  }
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [offeredTokens, setOfferedTokens] = useState('');
  const [sliceCount, setSliceCount] = useState(-5);

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
    setOfferedTokens('');
  };

  const handleOfferTokens = async () => {
    // Perform the action to offer tokens to the selected customer
    try {
      setIsRedeeming(true);
      await web3.initiateTransaction(selectedCustomer.customerAddress, offeredTokens);
      await web3.lastTransaction.wait();
      setLoading(true);
      await getDetails();
    } catch (err) {
      console.log("Error in transactions")
    } finally {
      setSelectedCustomer(null);
      setLoading(false);
      setIsRedeeming(false);
    }
  };

  const renderTransactionHistory = () => {
    const last5Transactions = transactions.slice(sliceCount);
    return last5Transactions.map((transaction, idx) => (
      <Paper key={idx} elevation={3} className="transaction-box">
        <Typography><strong>From: </strong>{transaction.from}</Typography>
        <Typography><strong>To: </strong>{transaction.to}</Typography>
        <Typography><strong>Value: </strong>{transaction.value} FT</Typography>
      </Paper>
    ));
  };
  const handleTransactionTypeChange = (event) => {
    setTransactionsType(event.target.value);
  };

  return (
    <div className="seller-dashboard">
      <div className="left-section">
        <Paper style={{ padding: "10px", textAlign: "center", maxHeight: "700px", overflowY: "scroll", maxWidth: "80%", margin: "auto" }} elevation={3} className="left-box">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={transactionsType}
              label="Type"
              onChange={handleTransactionTypeChange}
            >
              <MenuItem value={"Credit"}>Credit</MenuItem>
              <MenuItem value={"Debit"}>Debit</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6">Wallet Balance: {balance} FT</Typography>
          {/* Balance bar */}
          {/* {<div className="balance-bar" style={{ width: (walletBalance / 50000) * 100 + '%' }}></div>} */}
          <Typography variant="body2">Last {-sliceCount} Transactions:</Typography>
          <Box mt={2}>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
              <CircularProgress color="inherit" />
            </Backdrop>
            {renderTransactionHistory()}

          </Box>
          <Box mt={2} textAlign="center">
            <Button onClick={() => setSliceCount(sliceCount - 5)} variant="contained">Load More</Button>
          </Box>
        </Paper>
      </div>
      <div className="right-section">
        <Box mt={3}>
          <Typography variant="h5">Top Customers</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Spending (INR)</TableCell>
                  <TableCell>Shopping Frequency</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.spending}</TableCell>
                    <TableCell>{customer.shoppingFrequency}</TableCell>
                    <TableCell>
                      <Button variant="outlined" onClick={() => handleCustomerSelect(customer)}>Select</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {selectedCustomer && (
          <Box mt={3} className="offer-tokens-section">
            <Typography variant="h6">Offer Tokens to {selectedCustomer.name}</Typography>
            <TextField
              label="Tokens"
              variant="outlined"
              value={offeredTokens}
              onChange={(e) => setOfferedTokens(e.target.value)}
              fullWidth
              style={{ paddingBottom: "20px" }}
            />
            {isRedeeming ? (
              <CircularProgress size={24} /> // Show loading icon if redeeming
            ) : (
              <Button variant="contained" color="primary" onClick={handleOfferTokens}>Submit</Button>
            )}

          </Box>
        )}
      </div>
    </div>
  );
}


export default SellerDashboard;



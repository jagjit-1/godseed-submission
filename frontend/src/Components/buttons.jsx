




// import React, { useEffect, useState } from 'react';
// import { Box, Button, MenuItem, Select, Typography, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert } from '@mui/material';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { ethers } from 'ethers';

// const BlueBoxWithButtons = ({ contract, signer, address }) => {

//   const [oldTxn, setOldTxn] = useState(null);
//   useEffect(() => {


//   }, [address])

//   const getPreviousTransactions = async () => {
//     if (contract) {
//       const filter = contract.filters.Transfer(address);
//       const other = contract.filters.Transfer(null, address)
//       const events = await contract.queryFilter(filter, -100);
//       const otherEvents = await contract.queryFilter(other, -100)
//       console.log(events, otherEvents, "events")
//       setOldTxn(events);
//     }
//   }
//   return (
//     <Box
//       bgcolor="white"
//       width="100%"
//       minHeight="100vh"
//       display="grid"
//       gridTemplateColumns="repeat(2, 0.4fr)"
//       gap="0.5rem"
//       justifyContent="center"
//       alignItems="center"
//       textAlign="center"
//     >
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <Button variant="contained" color="primary">
//             Generate Referral Link
//           </Button>
//         </Grid>
//         <Grid item xs={6}>
//           <Link to="https://www.flipkart.com" target="_blank" style={{ textDecoration: 'none' }}>
//             <Button variant="contained" color="primary">
//               Shop and earn tokens
//             </Button>
//           </Link>
//         </Grid>
//         <Grid item xs={6}>
//           <Button variant="contained" color="primary">
//             Earn3
//           </Button>
//         </Grid>
//         <Grid item xs={6}>
//           <Button variant="contained" color="primary">
//             Earn4
//           </Button>
//         </Grid>
//       </Grid>

//     </Box>
//   );
// };

// const BlueBoxWithDropdown = ({ web3 }) => {
//   const [selectedCoupon, setSelectedCoupon] = useState(null);
//   const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
//   const [balance, setBalance] = useState(null);

//   useEffect(() => {
//     const getBalance = async () => {
//       const bal = await web3.getBalance();
//       setBalance(bal);
//     }
//     if (web3) {
//       getBalance()
//     }


//   }, [web3])
//   const coupons = [
//     { id: 1, title: 'Coupon A', price: 10, description: 'Description of Coupon A', tokenCost: "20", sellerAddress: "0x4d326dA657338De6786736702Bc09612301fc3a7" },
//     { id: 2, title: 'Coupon B', price: 20, description: 'Description of Coupon B', tokenCost: "50" },
//     { id: 3, title: 'Coupon C', price: 15, description: 'Description of Coupon C', tokenCost: "30" },
//     // Add more coupons as needed
//   ];

//   const handleCouponSelect = (event) => {
//     const selectedId = event.target.value;
//     const selected = coupons.find((coupon) => coupon.id === selectedId);
//     setSelectedCoupon(selected);
//   };


//   const handleRedeemButtonClick = () => {

//     setIsConfirmationOpen(true);
//   };

//   const handleConfirmRedeem = async () => {
//     // Perform redeem logic here

//     // loading section has to be here

//     await web3.initiateTransaction(selectedCoupon.sellerAddress, selectedCoupon.tokenCost);
//     await web3.lastTransaction.wait();
//     console.log("abb hua transactions complete")
//     const bal = await web3.getBalance();
//     setBalance(bal);
//     setIsConfirmationOpen(false);
//     setSelectedCoupon(null); // Clear selected coupon
//   };

//   const handleCloseConfirmation = () => {
//     setIsConfirmationOpen(false);
//   };

//   return (
//     <Box
//       bgcolor="#2874f0"
//       width="100%"
//       minHeight="100vh"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       flexDirection="column"
//       padding="2rem"
//     >
//       {
//         balance && (
//           <Typography variant='h5' style={{ color: "white", marginBottom: "20px" }}>FT Balance: {balance}</Typography>
//         )
//       }
//       <Select
//         variant="outlined"
//         color="primary"
//         value="select"
//         onChange={handleCouponSelect}
//         style={{ minWidth: 150, marginBottom: '1rem', color: 'white' }}
//       >
//         <MenuItem value="select">Select Coupon</MenuItem>
//         {coupons.map((coupon) => (
//           <MenuItem key={coupon.id} value={coupon.id}>
//             {coupon.title} - {coupon.price} USD
//           </MenuItem>
//         ))}
//       </Select>

//       {selectedCoupon && (
//         <Box mt={2} p={2} bgcolor="white" borderRadius={4} maxWidth={400} width="100%">
//           <Typography variant="h6">Selected Coupon:</Typography>
//           <Typography>{selectedCoupon.title}</Typography>
//           <Typography>{selectedCoupon.description}</Typography>
//           <Typography>Price: {selectedCoupon.price} USD</Typography>
//           <Typography>Token Cost: {selectedCoupon.tokenCost} FT</Typography>
//           <Button variant="contained" color="primary" onClick={handleRedeemButtonClick}>Redeem Coupon</Button>
//         </Box>
//       )}

//       <Dialog
//         open={isConfirmationOpen}
//         onClose={handleCloseConfirmation}
//       >
//         <DialogTitle>Confirm Redemption</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Are you sure you want to redeem the selected coupon?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseConfirmation} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleConfirmRedeem} color="primary">
//             Redeem
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// const YourPage = ({ web3 }) => {
//   return (
//     <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr", width: "100%", border: "1px solid black" }}>
//       <BlueBoxWithButtons web3={web3} />
//       <BlueBoxWithDropdown web3={web3} />
//     </div>
//   );
// };

// export default YourPage;



// ***************************************************************************
// ***************************************************************************
// ***************************************************************************
// ***************************************************************************f
// ***************************************************************************
// ***************************************************************************




// import React, { useEffect, useState } from 'react';
// import { Box, Button, MenuItem, Select, Backdrop, Typography, Paper, FormControl, InputLabel, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert } from '@mui/material';
// import { CircularProgress } from '@mui/material';
// import { Snackbar } from '@mui/material';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { Link } from 'react-router-dom';
// import '../pages/sellerDash.css';

// const BlueBoxWithButtons = ({ web3, setRedeemed }) => {

//   const [selectedCoupon, setSelectedCoupon] = useState(null);
//   const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
//   const [isCopying, setIsCopying] = useState(false);
//   const [showLink, setShowLink] = useState(false);
//   const handleCopyClick = () => {
//     setIsCopying(true);
//     setTimeout(() => {
//       setIsCopying(false);
//       setShowLink(true);
//     }, 1000);
//   };


//   const handleCouponSelect = (event) => {
//     const selectedId = event.target.value;
//     const selected = coupons.find((coupon) => coupon.id === selectedId);
//     setSelectedCoupon(selected);
//   };
//   const coupons = [
//     { id: 1, title: 'Coupon A', price: 10, description: 'Description of Coupon A', tokenCost: "20", sellerAddress: "0xe038C8729ca3d23938fcc666300B990E2865D69e" },
//     { id: 2, title: 'Coupon B', price: 20, description: 'Description of Coupon B', tokenCost: "50" },
//     { id: 3, title: 'Coupon C', price: 15, description: 'Description of Coupon C', tokenCost: "30" },
//     // Add more coupons as needed
//   ];

//   const [isRedeeming, setIsRedeeming] = useState(false);

//   const handleConfirmRedeem = async () => {
//     setIsRedeeming(true); // Set loading state

//     try {
//       // Perform redeem logic here
//       await web3.initiateTransaction(selectedCoupon.sellerAddress, selectedCoupon.tokenCost);
//       await web3.lastTransaction.wait();
//       console.log("Transaction complete");
//       //await getDetails();
//     } catch (error) {
//       console.error("Error during redemption:", error);
//     } finally {
//       setIsRedeeming(false); // Clear loading state
//       setRedeemed((val) => val + 1);
//       setIsConfirmationOpen(false);
//       setSelectedCoupon(null); // Clear selected coupon
//     }
//   };

//   const handleCloseConfirmation = () => {
//     setIsConfirmationOpen(false);
//   };
//   return (
//     <Box
//       bgcolor="white"
//       width="100%"
//       minHeight="100vh"
//       display="flex"
//       flexDirection="column"
//       justifyContent="space-evenly"
//       alignItems="center"
//       textAlign="center"
//     >
//       <Box display="flex"
//         flexDirection="column"
//         justifyContent="space-evenly"
//         alignItems="center"
//         textAlign="center">
//         <Select
//           variant="outlined"
//           color="primary"
//           value={selectedCoupon ? selectedCoupon.title : "select"}
//           onChange={handleCouponSelect}
//           style={{ minWidth: 150, marginBottom: '1rem', color: 'black' }}
//         >
//           <MenuItem value="select">Select Coupon</MenuItem>
//           {coupons.map((coupon) => (
//             <MenuItem key={coupon.id} value={coupon.id}>
//               {coupon.title} - {coupon.price} USD
//             </MenuItem>
//           ))}
//         </Select>

//         {selectedCoupon && (
//           <Box mt={2} p={2} bgcolor="white" borderRadius={4} maxWidth={400} width="100%">
//             <Typography variant="h6">Selected Coupon:</Typography>
//             <Typography>{selectedCoupon.title}</Typography>
//             <Typography>{selectedCoupon.description}</Typography>
//             <Typography>Price: {selectedCoupon.price} USD</Typography>
//             <Typography>Token Cost: {selectedCoupon.tokenCost} FT</Typography>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleConfirmRedeem}
//               disabled={isRedeeming}
//             >
//               {isRedeeming ? (
//                 <CircularProgress size={24} /> // Show loading icon if redeeming
//               ) : (
//                 "Redeem Coupon"
//               )}
//             </Button>
//           </Box>
//         )}

//         <Dialog
//           open={isConfirmationOpen}
//           onClose={handleCloseConfirmation}
//         >
//           <DialogTitle>Confirm Redemption</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Are you sure you want to redeem the selected coupon?
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseConfirmation} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={handleConfirmRedeem} color="primary">
//               Redeem
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>


//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           {showLink ? (
//             <Box>
//               <Typography variant="h6">Your Referral Link:</Typography>
//               <Link
//                 href="https://www.flipkart.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 https://www.flipkart.com
//               </Link>
//               <CopyToClipboard text="https://www.flipkart.com">
//                 <Button variant="outlined" color="primary" style={{ marginTop: '10px' }}>
//                   Copy Link
//                 </Button>
//               </CopyToClipboard>
//             </Box>
//           ) : (
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleCopyClick}
//               disabled={isCopying}
//             >
//               {isCopying ? (
//                 <CircularProgress size={24} />
//               ) : (
//                 'Generate Referral Link'
//               )}
//             </Button>
//           )}
//         </Grid>

//         <Grid item xs={6}>
//           <Link to="https://www.flipkart.com" target="_blank" style={{ textDecoration: 'none' }}>
//             <Button variant="contained" color="primary">
//               Shop and Earn Tokens
//             </Button>
//           </Link>
//         </Grid>
//         <Grid item xs={6}>
//           <Button variant="contained" color="primary">
//             Connect with social media and earn tokens
//           </Button>
//         </Grid>
//         <Grid item xs={6}>
//           <Button variant="contained" color="primary">
//             Earn4
//           </Button>
//         </Grid>
//       </Grid>

//     </Box>
//   );
// };

// const BlueBoxWithDropdown = ({ web3, redeemed }) => {

//   const [balance, setBalance] = useState(null);
//   const [transactions, setTransactions] = useState([]);
//   const [transactionsType, setTransactionsType] = useState("Credit");
//   const [sliceCount, setSliceCount] = useState(-5);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getDetails = async () => {
//       try {
//         setLoading(true);
//         const bal = await web3.getBalance();
//         const newTransactions = await web3.queryEvents("TRANSFER", transactionsType);
//         setBalance(bal);
//         setTransactions(newTransactions);
//       } catch (err) {
//         console.log(err)
//       } finally {
//         setLoading(false);
//       }

//     }
//     if (web3) {
//       getDetails()
//     }

//   }, [web3, transactionsType, redeemed])
//   const handleTransactionTypeChange = (event) => {
//     setTransactionsType(event.target.value);
//   };
//   const renderTransactionHistory = () => {
//     const last5Transactions = transactions.slice(sliceCount);
//     return last5Transactions.map((transaction, idx) => (
//       <Paper key={idx} elevation={3} className="transaction-box">
//         <Typography><strong>From: </strong>{transaction.from}</Typography>
//         <Typography><strong>To: </strong>{transaction.to}</Typography>
//         <Typography><strong>Value: </strong>{transaction.value} FT</Typography>
//       </Paper>

//     ));
//   };

//   return (
//     <Box
//       bgcolor="#2874f0"
//       width="100%"
//       minHeight="100vh"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       flexDirection="column"
//     >
//       <Paper style={{ padding: "10px", textAlign: "center", maxHeight: "700px", overflowY: "scroll" }} elevation={3}>
//         <FormControl style={{ margin: "5px 0 5px 0", minWidth: "100px" }}>
//           <InputLabel id="demo-simple-select-label">Type</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={transactionsType}
//             label="Type"
//             onChange={handleTransactionTypeChange}
//           >
//             <MenuItem value={"Credit"}>Credit</MenuItem>
//             <MenuItem value={"Debit"}>Debit</MenuItem>
//           </Select>
//         </FormControl>
//         <Typography variant="h6">Wallet Balance: {balance} FT</Typography>
//         {/* Balance bar */}
//         {/* {<div className="balance-bar" style={{ width: (walletBalance / 50000) * 100 + '%' }}></div>} */}
//         <Typography variant="body2">Last {-sliceCount} Transactions:</Typography>
//         <Box mt={2}>
//           <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
//             <CircularProgress color="inherit" />
//           </Backdrop>
//           {renderTransactionHistory()}
//         </Box>
//         <Box mt={2} textAlign="center">
//           <Button onClick={() => setSliceCount(sliceCount - 5)} variant="contained">Load More</Button>
//         </Box>
//       </Paper>
//     </Box >
//   );
// };

// const YourPage = ({ web3 }) => {
//   const [redeemed, setRedeemed] = useState(0);
//   return (
//     <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr", width: "100%", marginTop: "55px" }}>
//       <BlueBoxWithButtons setRedeemed={setRedeemed} web3={web3} />
//       <BlueBoxWithDropdown redeemed={redeemed} web3={web3} />
//     </div>
//   );
// };

// export default YourPage;



// **********************+++++++++++++++++++++++++++----------------------9\\\\\\\\\\\\\\\\\\\\\\\
// ******************************************************************************************************************************************************
// *****************************************************************************************************************************************************
// *****************************************************************************************************************************************************
// *****************************************************************************************************************************************************
// *****************************************************************************************************************************************************
// *****************************************************************************************************************************************************



import React, { useEffect, useState } from 'react';
import { Box, Button, MenuItem, Select, Backdrop, Typography, Paper, FormControl, InputLabel, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert , Link} from '@mui/material';
import { CircularProgress } from '@mui/material';
import { Snackbar } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { Link } from 'react-router-dom';
import '../pages/sellerDash.css';
import { Instagram, Facebook } from '@mui/icons-material'; // Import the icons
import axios from 'axios';






const BlueBoxWithButtons = ({ web3, setRedeemed }) => {

  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const handleCopyClick = () => {
    setIsCopying(true);
    setTimeout(() => {
      setIsCopying(false);
      setShowLink(true);
    }, 1000);

   
  };


  const handleCouponSelect = (event) => {
    const selectedId = event.target.value;
    const selected = coupons.find((coupon) => coupon.id === selectedId);
    setSelectedCoupon(selected);
  };
  const coupons = [
    { id: 1, title: 'Coupon A', price: 10, description: 'Description of Coupon A', tokenCost: "20", sellerAddress: "0xe038C8729ca3d23938fcc666300B990E2865D69e" },
    { id: 2, title: 'Coupon B', price: 20, description: 'Description of Coupon B', tokenCost: "50" },
    { id: 3, title: 'Coupon C', price: 15, description: 'Description of Coupon C', tokenCost: "30" },
    // Add more coupons as needed
  ];

  const [isRedeeming, setIsRedeeming] = useState(false);

  const handleConfirmRedeem = async () => {
    setIsRedeeming(true); // Set loading state

    try {
      // Perform redeem logic here
      await web3.initiateTransaction(selectedCoupon.sellerAddress, selectedCoupon.tokenCost);
      await web3.lastTransaction.wait();
      console.log("Transaction complete");
      //await getDetails();
    } catch (error) {
      console.error("Error during redemption:", error);
    } finally {
      setIsRedeeming(false); // Clear loading state
      setRedeemed((val) => val + 1);
      setIsConfirmationOpen(false);
      setSelectedCoupon(null); // Clear selected coupon
    }
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
  };


  // for logging into social media
  const [isSocialMediaDialogOpen, setIsSocialMediaDialogOpen] = useState(false);
const [connectingTo, setConnectingTo] = useState(null);
const [isConnecting, setIsConnecting] = useState(false);
// const handleSocialMediaConnect = (platform) => {
//   setIsSocialMediaDialogOpen(true);
//   setConnectingTo(platform);
// };

const handleSocialMediaConnect = async () => {
  try {
    setIsConnecting(true);

    // Redirect the user to the Facebook login dialog
    const response = await axios.get(`/auth/facebook?client_id=181790724922829`); // Using your Facebook App ID
    const authUrl = response.data.authUrl;

    // Redirect the user to the Facebook login dialog
    window.location.href = authUrl;
  } catch (error) {
    console.error("Error connecting with Facebook:", error);
  } finally {
    setIsConnecting(false);
  }
};

const handleConnectButtonClick = async () => {
  setIsConnecting(true);
  // Simulate connecting to social media platforms
  await new Promise((resolve) => setTimeout(resolve, 1000));
  setIsConnecting(false);
  setIsSocialMediaDialogOpen(false);
  // You can add logic here to update state or perform other actions after successful connection
  console.log(`Connected to ${connectingTo}`);
};



  return (
    <Box
      bgcolor="white"
      width="100%"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      textAlign="center"
    >
      <Box display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        textAlign="center">
        <Select
          variant="outlined"
          color="primary"
          value={selectedCoupon ? selectedCoupon.title : "select"}
          onChange={handleCouponSelect}
          style={{ minWidth: 150, marginBottom: '1rem', color: 'black' }}
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleConfirmRedeem}
              disabled={isRedeeming}
            >
              {isRedeeming ? (
                <CircularProgress size={24} /> // Show loading icon if redeeming
              ) : (
                "Redeem Coupon"
              )}
            </Button>
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


      <Grid container spacing={2}>
        <Grid item xs={6}>
          {showLink ? (
            <Box>
              <Typography variant="h6">Your Referral Link:</Typography>
              <Link
                href="https://www.flipkart.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.flipkart.com
              </Link>
              <CopyToClipboard text="https://www.flipkart.com">
                <Button variant="outlined" color="primary" style={{ marginTop: '10px' }}>
                  Copy Link
                </Button>
              </CopyToClipboard>
            </Box>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleCopyClick}
              disabled={isCopying}
            >
              {isCopying ? (
                <CircularProgress size={24} />
              ) : (
                'Generate Referral Link'
              )}
            </Button>
          )}
        </Grid>

        <Grid item xs={6}>
          <Link to="https://www.flipkart.com" target="_blank" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Shop and Earn Tokens
            </Button>
          </Link>
        </Grid>


        <Grid item xs={6}>
        
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSocialMediaConnect('facebook')}
          disabled={isConnecting}
          startIcon={<Facebook />} // Add Facebook icon
        >
          {isConnecting ? (
            <CircularProgress size={24} />
          ) : (
            'Connect with Facebook'
          )}
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

const BlueBoxWithDropdown = ({ web3, redeemed }) => {

  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [transactionsType, setTransactionsType] = useState("Credit");
  const [sliceCount, setSliceCount] = useState(-5);
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
        console.log(err)
      } finally {
        setLoading(false);
      }

    }
    if (web3) {
      getDetails()
    }

  }, [web3, transactionsType, redeemed])
  const handleTransactionTypeChange = (event) => {
    setTransactionsType(event.target.value);
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
      <Paper style={{ padding: "10px", textAlign: "center", maxHeight: "700px", overflowY: "scroll" }} elevation={3}>
        <FormControl style={{ margin: "5px 0 5px 0", minWidth: "100px" }}>
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
    </Box >
  );
};

const YourPage = ({ web3 }) => {
  const [redeemed, setRedeemed] = useState(0);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr", width: "100%", marginTop: "55px" }}>
      <BlueBoxWithButtons setRedeemed={setRedeemed} web3={web3} />
      <BlueBoxWithDropdown redeemed={redeemed} web3={web3} />
    </div>
  );
};

export default YourPage;



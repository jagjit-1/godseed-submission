
const { abi } = require("./abi");
const { Web3 } = require("web3");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());



const { PROVIDERURL, CONTRACT_ADDRESS, OWNER_PRIVATE_ADDRESS, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = process.env;
const PORT = 5000;

const web3 = new Web3(new Web3.providers.WebsocketProvider(PROVIDERURL));
const senderAccount = web3.eth.accounts.privateKeyToAccount(OWNER_PRIVATE_ADDRESS);
const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

const calculateRewards = (eventObj) => {
    // logic to be implemented
    console.log(eventObj,eventObj.token)
    return eventObj.token;
}

app.post("/seller/mintRewards", async (req, res) => {
    try {
        const tokensToMint = calculateRewards(req.body);
        const txnResponse = await transferToken(tokensToMint, req.body.recieverAddress);
        console.log(txnResponse);
        const status = txnResponse.status ? "success" : "failure";
        const txnHash = txnResponse.transactionHash.toString();
        res.status(200).json({ status, txnHash });
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
});



app.get("/user/balance", async (req, res) => {
    try {
        const { address } = req.body;
        const balance = await checkBalance(address);
        res.status(200).json({ balance, address })
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

})





const transferToken = async (tokensToMint, to) => {
    const value = web3.utils.toWei(tokensToMint, 'ether');

    const mintTxObject = contract.methods.mintToken(to, value);

    const nonce = await web3.eth.getTransactionCount("0xe76c660B4d44Ba18Cc86D2AB8bcC21F4F2d9e44f");

    const gasPrice = await web3.eth.getGasPrice();
    console.log(nonce, gasPrice);
    const txObject = {
        from: senderAccount,
        to: CONTRACT_ADDRESS,
        gas: 2000000, // Adjust gas limit as needed
        gasPrice: web3.utils.toHex(gasPrice),
        data: mintTxObject.encodeABI(),
        nonce: nonce,
    };
    const signedTx = await web3.eth.accounts.signTransaction(txObject, OWNER_PRIVATE_ADDRESS);
    const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    return txReceipt;
}


const checkBalance = async (address) => {
    const balance = await contract.methods.balanceOf(address).call();
    return web3.utils.fromWei(balance, 'ether');
}




// facebook login: OAuth and API

app.get("/auth/facebook", async (req, res) => {
    console.log("hehe");
    const clientID = "181790724922829"; // Your Facebook App ID
    const redirectUri = encodeURIComponent("http://localhost:5000/auth/facebook/callback");
    const authUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${clientID}&redirect_uri=${redirectUri}&scope=email,user_friends`;
    const response = await axios.get(authUrl);
    console.log(response.data)
});

app.get("/auth/facebook/callback", async (req, res) => {
    const { code } = req.query;
    console.log("lol")
    try {
        const clientID = "181790724922829"; // Your Facebook App ID
        const clientSecret = "YOUR_CLIENT_SECRET"; // Your Facebook App Secret
        const redirectUri = encodeURIComponent("http://localhost:3000/auth/facebook/callback");

        // Exchange code for access token
        const response = await axios.get(
            `https://graph.facebook.com/v12.0/oauth/access_token?client_id=${clientID}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&code=${code}`
        );

        const accessToken = response.data.access_token;

        // Store the accessToken or use it directly for API calls
        console.log("Access Token:", accessToken);

        // You can redirect the user or send a response back
        res.send("Connected to Facebook!");
    } catch (error) {
        console.error("Error exchanging code for access token:", error);
        res.status(500).send("Failed to connect with Facebook");
    }
});


app.post("/user/fetchFacebookProfile", async (req, res) => {
    try {
        const userAccessToken = req.body.userAccessToken; // Assuming you send the user access token from the frontend
        const fields = "id,name,email"; // Specify the fields you want to retrieve

        // Make a GET request to Facebook's API to fetch the user's profile using the user access token
        const response = await axios.get(`https://graph.facebook.com/v12.0/me?fields=${fields}`, {
            headers: {
                Authorization: `Bearer ${userAccessToken}`, // Include the user access token in the headers
            },
        });

        const userData = response.data;
        res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


app.get("/user/facebook-data", async (req, res) => {
    const accessToken = "YOUR_USER_ACCESS_TOKEN"; // Replace with the user's access token
    try {
        // Example: Get user's profile information
        const response = await axios.get(
            `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`
        );

        const userData = response.data;
        res.status(200).json(userData);
    } catch (error) {
        console.error("Error fetching Facebook user data:", error);
        res.status(500).send("Failed to fetch Facebook user data");
    }
});



app.listen(PORT, () => console.log("server up on", PORT));
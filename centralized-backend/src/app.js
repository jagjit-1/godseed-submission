
const { abi } = require("./abi");
const { Web3 } = require("web3");
const dotenv = require("dotenv");
const express = require("express");

const app = express();
dotenv.config();

app.use(express.json());

const { PROVIDERURL, CONTRACT_ADDRESS, OWNER_PRIVATE_ADDRESS } = process.env;

console.log(OWNER_PRIVATE_ADDRESS)

const web3 = new Web3(new Web3.providers.WebsocketProvider(PROVIDERURL));
const senderAccount = web3.eth.accounts.privateKeyToAccount(OWNER_PRIVATE_ADDRESS);
const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

const calculateRewards = (eventObj) => {
    // logic to be implemented 
    return 100;
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



app.listen(3000, () => console.log("server up on", 3000));
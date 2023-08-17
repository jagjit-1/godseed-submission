
const { abi } = require("./abi");
const { Web3 } = require("web3");

const providerUrl = "wss://polygon-mumbai.g.alchemy.com/v2/7m22BD2KWwtcykpeioX0iCBycS2v3YC7";
const contractAddress = "0x33C35Df6B92FC699e0d0892363Fb1fBB93ca5FEc";
const webhookUrl = "https://your-dummy-fetch-url";

const senderPrivateKey = "0x140a87fc0ac66a4cde5e91ad2a6ed8188d83a3cbad0ea7ead0c9a70e3de87310";
const receiverAddress = "0x4d326dA657338De6786736702Bc09612301fc3a7";

const web3 = new Web3(new Web3.providers.WebsocketProvider(providerUrl));
const senderAddress = web3.eth.accounts.privateKeyToAccount(senderPrivateKey);
const contract = new web3.eth.Contract(abi, contractAddress);

const transferToken = async () => {
    const value = web3.utils.toWei('100', 'ether');
    
    const mintTxObject = contract.methods.mintToken(receiverAddress, value);

    const nonce = await web3.eth.getTransactionCount("0xe76c660B4d44Ba18Cc86D2AB8bcC21F4F2d9e44f");
    
    const gasPrice = await web3.eth.getGasPrice();
    console.log(nonce, gasPrice);
    const txObject = {
        from: senderAddress,
        to: contractAddress,
        gas: 2000000, // Adjust gas limit as needed
        gasPrice: web3.utils.toHex(gasPrice),
        data: mintTxObject.encodeABI(),
        nonce: nonce,
    };
    const signedTx = await web3.eth.accounts.signTransaction(txObject, senderPrivateKey);
    const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log('Transaction Hash:', txReceipt.transactionHash);

}




contract.methods.balanceOf(receiverAddress).call().then(balance=>{
    console.log(balance)
    console.log(web3.utils.fromWei(balance, 'ether'))
})
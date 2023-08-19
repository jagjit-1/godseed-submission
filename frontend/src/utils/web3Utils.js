import { ethers } from "ethers";

class Web3Abstraction {
    constructor(contractAddress, contractABI) {
        this.contractAddress = contractAddress;
        this.contractABI = contractABI;
        this.address = null;
        this.lastTransaction = null;
        this.signer = null;
        this.provider = null;
    }

    connectWallet = async () => {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' }); // check this
            this.provider = new ethers.BrowserProvider(window.ethereum);
            this.provider.on("network", (newNetwork, oldNetwork) => {
                if (oldNetwork) {
                    window.location.reload();
                }
            })
            this.signer = await this.provider.getSigner();
            this.address = await this.signer.getAddress();
        } else {
            throw new Error("Ethereum property missing in window object")
        }
    };
    connectContract = async () => {
        if (this.signer) {
            console.log(this.signer)
            this.contract = new ethers.Contract(this.contractAddress, this.contractABI, this.signer);
        } else {
            throw new Error("Invalid signer");
        }
    };

    initiateTransaction = async (to, value) => {
        if (this.signer) {

            this.lastTransaction = await this.contract.transfer(to, ethers.parseEther(value));
        } else {
            throw new Error("Invalid signer");
        }
    }

    getBalance = async () => {
        if (this.contract) {
            let balance = await this.contract.balanceOf(this.address);
            balance = ethers.formatUnits(balance, 18);
            return balance;
        }
        else {
            throw new Error("Please call connnect contract first");
        }
    }

}


export default Web3Abstraction;
import { ethers } from "ethers";
import axios from "axios";
import { Network, Alchemy } from "alchemy-sdk";

class Web3Abstraction {
    constructor(contractAddress, contractABI) {
        this.contractAddress = contractAddress;
        this.contractABI = contractABI;
        this.address = null;
        this.network = null;
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
            this.network = await this.provider.getNetwork()
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

    queryEvents = async () => {
        // const settings = {
        //     apiKey: process.env.ALCHEMY_API,
        //     network: Network.MATIC_MUMBAI,
        // };
        // const alchemy = new Alchemy(settings);
        // const currentBlock = alchemy.core.getBlockNumber();
        // const res = await alchemy.core
        //     .getLogs({
        //         toBlock:currentBlock
        //     })
        // console.log(res);
        // console.log(this.network)
        // console.log(process.env.ALCHEMY_API)
        // const testprovider = ethers.getDefaultProvider(this.network.name, {
        //     alchemy: process.env.ALCHEMY_API,
        // });
        // const filters = this.contract.filters.Transfer(null, this.address, null);
        // console.log(filters)
        // const events = await testprovider.getLogs({ topics: ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "0x000000000000000000000000e76c660b4d44ba18cc86d2ab8bcc21f4f2d9e44f", "0x0000000000000000000000004d326da657338de6786736702bc09612301fc3a7"] })
        // console.log(events)



    }

}


export default Web3Abstraction;
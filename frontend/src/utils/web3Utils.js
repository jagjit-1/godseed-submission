import { ethers } from "ethers";
import axios from "axios";

const eventHashMap = {
    "TRANSFER": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
}

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

    decodeEventLog = (logs) => {
        logs = logs || [];
        const abi = ["event Transfer(address indexed from, address indexed to, uint256 value)"]
        const iface = new ethers.Interface(abi);
        return logs.map((log) => {
            const [from, to, value] = iface.parseLog(log).args;
            return {
                from,
                to,
                value: ethers.formatUnits(value, 18)
            }
        });
    }

    queryEvents = async (event = "TRANSFER", type = "CREDIT") => {
        event = event.toUpperCase();
        type = type.toUpperCase();
        console.log(event, type, "iefnsofbsouefbosubefusbfe!!!!!!!!")
        if (eventHashMap[event]) {

            if (type === "CREDIT") {
                // CREDIT CASE

                console.log("what", this.address, ethers.zeroPadValue(this.address, 32));
                const res = await axios.get("https://api-testnet.polygonscan.com/api", {
                    params: {
                        module: "logs",
                        action: "getLogs",
                        address: this.contractAddress,
                        topic0: eventHashMap[event],
                        topic0_1_opr: "and",
                        topic1: null,
                        topic1_2_opr: "and",
                        topic2: ethers.zeroPadValue(this.address, 32),
                        apikey: "2MKTXY9VSCCQACFHIPQXNUFD634TJYCTQS"
                    }
                })
                return this.decodeEventLog(res.data.result);
            }
            else {
                // DEBIT CASE

                console.log("heinjijijijiji")
                const res = await axios.get("https://api-testnet.polygonscan.com/api", {
                    params: {
                        module: "logs",
                        action: "getLogs",
                        address: this.contractAddress,
                        topic0: eventHashMap[event],
                        topic0_1_opr: "and",
                        topic1: ethers.zeroPadValue(this.address, 32),
                        apikey: "2MKTXY9VSCCQACFHIPQXNUFD634TJYCTQS"
                    }
                })
                
                return this.decodeEventLog(res.data.result);


            }

        }
        else {
            throw new Error("Invalid event");
        }

    }

}


export default Web3Abstraction;